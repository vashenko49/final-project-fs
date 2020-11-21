package com.marksem.crm.controller;

import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.dto.response.AuthDtoResponse;
import com.marksem.crm.facade.AuthFacade;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        authFacade.logout(request, response);
    }

    @GetMapping("refresh")
    public ResponseEntity<AuthDtoResponse> refresh(HttpServletRequest request) {
        return ResponseEntity.ok(authFacade.refresh(request));
    }
}