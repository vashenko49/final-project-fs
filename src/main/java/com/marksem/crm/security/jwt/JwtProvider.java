package com.marksem.crm.security.jwt;

import com.marksem.crm.entity.enums.TypeToken;
import com.marksem.crm.security.CustomUserDetailsService;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtProvider {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration-access-minutes}")
    private String expirationAccessMinutes;

    @Value("${jwt.expiration-refresh-minutes}")
    private String expirationRefreshMinutes;

    private final CustomUserDetailsService customUserDetailsService;

    public JwtProvider(@Qualifier("customUserDetailsService") CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @PostConstruct
    protected void init() {
        jwtSecret = Base64.getEncoder().encodeToString(jwtSecret.getBytes());
    }

    public String generateToken(String email, TypeToken typeToken) {
        Date date = Date.from(LocalDateTime
                .now()
                .plusMinutes(Integer
                        .parseInt(typeToken == TypeToken.ACCESS
                                ? expirationAccessMinutes
                                : expirationRefreshMinutes))
                .atZone(ZoneId.of("UTC"))
                .toInstant());
        return Jwts.builder()
                .setSubject(email)
                .claim("typeToken", typeToken.name())
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public boolean validateToken(String token, TypeToken typeToken) {
        Claims claims = getBodyFromToken(token);
        return !claims.getExpiration().before(new Date()) && claims.get("typeToken").equals(typeToken.name());
    }

    public Authentication getAuthentication(String token) {
        UserDetails customUserDetails = this.customUserDetailsService.loadUserByUsername(getEmailFromToken(token));
        return new UsernamePasswordAuthenticationToken(customUserDetails, "", customUserDetails.getAuthorities());
    }

    public String getEmailFromToken(String token) {
        return getBodyFromToken(token).getSubject();
    }

    public Claims getBodyFromToken(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(jwtSecret)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException expEx) {
            throw new JwtAuthenticationException("Token expired");
        } catch (UnsupportedJwtException unsEx) {
            throw new JwtAuthenticationException("Unsupported jwt");
        } catch (MalformedJwtException mjEx) {
            throw new JwtAuthenticationException("Invalid jwt");
        } catch (SignatureException sEx) {
            throw new JwtAuthenticationException("Invalid signature jwt");
        } catch (IllegalArgumentException e) {
            throw new JwtAuthenticationException("Empty or null jwt");
        }
    }

    public Date getExpiryFromToken(String token) {
        return getBodyFromToken(token).getExpiration();
    }

    public String resolveToken(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        if (authorization != null && authorization.startsWith("Bearer ")) {
            return authorization.substring(7);
        }
        return null;
    }
}
