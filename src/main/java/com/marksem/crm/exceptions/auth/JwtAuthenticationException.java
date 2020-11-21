package com.marksem.crm.exceptions.auth;

import org.springframework.security.core.AuthenticationException;

public class JwtAuthenticationException extends AuthenticationException {
    
    public JwtAuthenticationException(String msg) {
        super(msg);
    }
}
