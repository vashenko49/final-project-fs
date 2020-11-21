package com.marksem.crm.service;

import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.entity.RefreshToken;
import com.marksem.crm.entity.enums.TypeToken;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import com.marksem.crm.repos.RefreshTokenRepository;
import com.marksem.crm.security.jwt.JwtProvider;
import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.entity.Customer;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Service
public class AuthService {
    final private CustomerService customerService;
    final private JwtProvider jwtProvider;
    final private AuthenticationManager authenticationManager;
    final private RefreshTokenRepository refreshTokenRepository;

    public AuthService(CustomerService customerService, JwtProvider jwtProvider, AuthenticationManager authenticationManager, RefreshTokenRepository refreshTokenRepository) {
        this.customerService = customerService;
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public AuthDtoResponse createFullTokens(String email) {
        String accessToken = jwtProvider.generateToken(email, TypeToken.ACCESS);
        String refreshToken = jwtProvider.generateToken(email, TypeToken.REFRESH);
        Date expiryAccessToken = jwtProvider.getExpiryFromToken(accessToken);
        Date expiryRefreshToken = jwtProvider.getExpiryFromToken(refreshToken);
        return new AuthDtoResponse(accessToken, refreshToken, expiryAccessToken, expiryRefreshToken);
    }

    public AuthDtoResponse login(AuthDtoRequest auth) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(auth.getEmail(), auth.getPassword()));
        Customer customer = customerService.findByEmail(auth.getEmail());
        if (customer == null) throw new UsernameNotFoundException("User doesn't exists");
        AuthDtoResponse fullTokens = createFullTokens(customer.getEmail());
        RefreshToken refreshTokenEntity = new RefreshToken(customer, fullTokens.getRefreshToken(), fullTokens.getExpiryRefreshToken());
        refreshTokenRepository.findByCustomerId(customer.getId())
                .ifPresentOrElse(
                        token -> {
                            token.setToken(refreshTokenEntity.getToken());
                            token.setExpiry(refreshTokenEntity.getExpiry());
                            refreshTokenRepository.save(token);
                        },
                        () -> refreshTokenRepository.save(refreshTokenEntity));
        return fullTokens;
    }

    public AuthDtoResponse refreshToken(HttpServletRequest request) {
        String token = jwtProvider.resolveToken(request);
        jwtProvider.validateToken(token, TypeToken.REFRESH);
        String email = jwtProvider.getEmailFromToken(token);
        Customer customer = customerService.findByEmail(email);
        RefreshToken refreshTokenEntity = refreshTokenRepository.findByToken(token)
                .orElseThrow(() -> new JwtAuthenticationException("Invalid jwt"));
        if (!refreshTokenEntity.getCustomer().getId().equals(customer.getId()))
            throw new UsernameNotFoundException("User doesn't exists");
        AuthDtoResponse fullTokens = createFullTokens(customer.getEmail());
        refreshTokenEntity.setExpiry(fullTokens.getExpiryRefreshToken());
        refreshTokenEntity.setToken(fullTokens.getRefreshToken());
        refreshTokenRepository.save(refreshTokenEntity);
        return fullTokens;
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();
        securityContextLogoutHandler.logout(request, response, null);
        if (email != null) {
            Customer customer = customerService.findByEmail(email);
            refreshTokenRepository.findByCustomerId(customer.getId())
                    .ifPresent(refreshTokenRepository::delete);
        }
    }
}
