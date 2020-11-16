package com.marksem.crm.controller;

import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.facade.AuthFacade;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/v1/auth/")
public class AuthController {
    final private AuthFacade authFacade;

    public AuthController(AuthFacade authFacade) {
        this.authFacade = authFacade;
    }

    @PostMapping("login")
    public ResponseEntity<AuthDtoResponse> login(@Validated @RequestBody AuthDtoRequest auth) {
        return ResponseEntity.ok(authFacade.login(auth));
    }

    @PostMapping("logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();
        securityContextLogoutHandler.logout(request, response, null);
    }
}