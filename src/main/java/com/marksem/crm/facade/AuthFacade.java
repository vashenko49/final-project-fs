package com.marksem.crm.facade;

import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.dto.response.DocumentDtoResponse;
import com.marksem.crm.dto.response.UserDtoResponse;
import com.marksem.crm.entity.Document;
import com.marksem.crm.service.AuthService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

@Component
public class AuthFacade {
    final private AuthService authService;
    final private ModelMapper mapper;

    public AuthFacade(AuthService authService, ModelMapper mapper) {
        this.authService = authService;
        this.mapper = mapper;
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

    public UserDtoResponse profile(Principal principal) {
        return mapper.map(authService.profile(principal), UserDtoResponse.class);
    }
}
