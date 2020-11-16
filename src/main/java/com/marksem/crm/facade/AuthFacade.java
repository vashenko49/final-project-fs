package com.marksem.crm.facade;

import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.service.AuthService;
import org.springframework.stereotype.Component;

@Component
public class AuthFacade {
    final private AuthService authService;

    public AuthFacade(AuthService authService) {
        this.authService = authService;
    }

    public AuthDtoResponse login(AuthDtoRequest obj) {
        return new AuthDtoResponse(authService.login(obj));
    }
}
