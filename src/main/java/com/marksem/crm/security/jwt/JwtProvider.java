package com.marksem.crm.security.jwt;

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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtProvider {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration-day}")
    private String JwtSessionTimeDay;

    private final CustomUserDetailsService customUserDetailsService;

    public JwtProvider(@Qualifier("customUserDetailsService") CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @PostConstruct
    protected void init() {
        jwtSecret = Base64.getEncoder().encodeToString(jwtSecret.getBytes());
    }

    public String generateToken(String email) {
        Date date = Date.from(LocalDate.now().plusDays(Integer.parseInt(JwtSessionTimeDay)).atStartOfDay(ZoneId.systemDefault()).toInstant());
        return Jwts.builder()
                .setSubject(email)
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jws<Claims> claimsJws = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return !claimsJws.getBody().getExpiration().before(new Date());
        } catch (ExpiredJwtException expEx) {
            throw new JwtAuthenticationException("Token expired");
        } catch (UnsupportedJwtException unsEx) {
            throw new JwtAuthenticationException("Unsupported jwt");
        } catch (MalformedJwtException mjEx) {
            throw new JwtAuthenticationException("Malformed jwt");
        } catch (SignatureException sEx) {
            throw new JwtAuthenticationException("Invalid signature");
        } catch (Exception e) {
            throw new JwtAuthenticationException("invalid token");
        }
    }

    public Authentication getAuthentication(String token) {
        UserDetails customUserDetails = this.customUserDetailsService.loadUserByUsername(getEmailFromToken(token));
        return new UsernamePasswordAuthenticationToken(customUserDetails, "", customUserDetails.getAuthorities());
    }

    public String getEmailFromToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        if (authorization != null && authorization.startsWith("Bearer ")) {
            return authorization.substring(7, authorization.length());
        }
        return null;
    }
}
