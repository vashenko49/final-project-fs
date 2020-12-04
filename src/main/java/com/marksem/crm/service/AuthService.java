package com.marksem.crm.service;

import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.entity.Auth;
import com.marksem.crm.entity.RefreshToken;
import com.marksem.crm.entity.Token;
import com.marksem.crm.entity.enums.TypeToken;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import com.marksem.crm.repos.RefreshTokenRepository;
import com.marksem.crm.security.jwt.JwtProvider;
import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.entity.User;
import com.marksem.crm.service.user.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Date;

@Service
public class AuthService {
    final private UserService userService;
    final private JwtProvider jwtProvider;
    final private AuthenticationManager authenticationManager;
    final private RefreshTokenRepository refreshTokenRepository;

    public AuthService(UserService userService, JwtProvider jwtProvider, AuthenticationManager authenticationManager, RefreshTokenRepository refreshTokenRepository) {
        this.userService = userService;
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public Token createFullTokens(String email) {
        String accessToken = jwtProvider.generateToken(email, TypeToken.ACCESS);
        String refreshToken = jwtProvider.generateToken(email, TypeToken.REFRESH);
        Date expiryAccessToken = jwtProvider.getExpiryFromToken(accessToken);
        Date expiryRefreshToken = jwtProvider.getExpiryFromToken(refreshToken);
        return new Token(accessToken, refreshToken, expiryAccessToken, expiryRefreshToken);
    }

    public Auth login(AuthDtoRequest auth) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(auth.getEmail(), auth.getPassword()));

        User user = userService.findByEmail(auth.getEmail());
        Token fullTokens = createFullTokens(user.getEmail());

        RefreshToken refreshTokenEntity = new RefreshToken(user, fullTokens.getRefreshToken(), fullTokens.getExpiryRefreshToken());
        refreshTokenRepository.findByUserId(user.getId())
                .ifPresentOrElse(
                        token -> {
                            token.setToken(refreshTokenEntity.getToken());
                            token.setExpiry(refreshTokenEntity.getExpiry());
                            refreshTokenRepository.save(token);
                        },
                        () -> refreshTokenRepository.save(refreshTokenEntity));
        return new Auth(fullTokens, user);
    }

    public Auth refreshToken(HttpServletRequest request) {
        String token = jwtProvider.resolveToken(request);
        jwtProvider.validateToken(token, TypeToken.REFRESH);
        String email = jwtProvider.getEmailFromToken(token);
        User user = userService.findByEmail(email);
        RefreshToken refreshTokenEntity = refreshTokenRepository.findByToken(token)
                .orElseThrow(() -> new JwtAuthenticationException("Invalid jwt"));
        if (!refreshTokenEntity.getUser().getId().equals(user.getId()))
            throw new UsernameNotFoundException("User doesn't exists");
        Token fullTokens = createFullTokens(user.getEmail());
        refreshTokenEntity.setExpiry(fullTokens.getExpiryRefreshToken());
        refreshTokenEntity.setToken(fullTokens.getRefreshToken());
        refreshTokenRepository.save(refreshTokenEntity);
        return new Auth(fullTokens, user);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();
        securityContextLogoutHandler.logout(request, response, null);
        if (email != null) {
            User user = userService.findByEmail(email);
            refreshTokenRepository.findByUserId(user.getId())
                    .ifPresent(refreshTokenRepository::delete);
        }
    }

    public User profile(Principal principal) {
        return userService.findByEmail(principal.getName());
    }
}
