package com.marksem.crm.security.jwt;

import com.marksem.crm.exceptions.CustomAuthenticationEntryPoint;
import com.marksem.crm.exceptions.auth.JwtAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class JwtFilter extends GenericFilterBean {

    final private JwtProvider jwtProvider;
    private final CustomAuthenticationEntryPoint customAuthenticationEntryPoint;

    public JwtFilter(JwtProvider jwtProvider, CustomAuthenticationEntryPoint customAuthenticationEntryPoint) {
        this.jwtProvider = jwtProvider;
        this.customAuthenticationEntryPoint = customAuthenticationEntryPoint;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        String token = jwtProvider.resolveToken((HttpServletRequest) servletRequest);
        try {
            if (token != null && jwtProvider.validateToken(token)) {
                Authentication authentication = jwtProvider.getAuthentication(token);
                if (authentication != null) {
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (JwtAuthenticationException jwtAuthenticationException) {
            SecurityContextHolder.clearContext();
            customAuthenticationEntryPoint.commence((HttpServletRequest) servletRequest, (HttpServletResponse) servletResponse, jwtAuthenticationException);
        }
    }

}
