package com.marksem.crm.facade;

import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.service.AuthService;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthFacade {
    final private AuthService authService;

    public AuthFacade(AuthService authService) {
        this.authService = authService;
    }

    public AuthDtoResponse login(AuthDtoRequest authDtoRequest) {
        return authService.login(authDtoRequest);
    }

    public AuthDtoResponse refresh(HttpServletRequest request) {
        return authService.refreshToken(request);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        authService.logout(request, response);
    }
}
