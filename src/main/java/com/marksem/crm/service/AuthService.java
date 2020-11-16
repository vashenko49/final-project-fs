package com.marksem.crm.service;

import com.marksem.crm.security.jwt.JwtProvider;
import com.marksem.crm.dto.request.AuthDtoRequest;
import com.marksem.crm.entity.Customer;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    final private CustomerService customerService;
    final private JwtProvider jwtProvider;
    final private AuthenticationManager authenticationManager;

    public AuthService(CustomerService customerService, JwtProvider jwtProvider, AuthenticationManager authenticationManager) {
        this.customerService = customerService;
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
    }

    public String login(AuthDtoRequest auth) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(auth.getEmail(), auth.getPassword()));
        Customer customer = customerService.findByEmail(auth.getEmail());
        if (customer == null) throw new UsernameNotFoundException("User doesn't exists");
        return jwtProvider.generateToken(customer.getEmail());
    }
}
