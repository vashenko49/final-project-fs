package com.marksem.crm.security;

import com.marksem.crm.entity.Customer;
import com.marksem.crm.service.CustomerService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    private final CustomerService customerService;

    public CustomUserDetailsService(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerService.findByEmail(email);
        if (customer == null) throw new UsernameNotFoundException("User doesn't exists");
        return CustomUserDetails.fromCustomerToCustomUserDetails(customer);
    }
}