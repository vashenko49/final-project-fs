package com.marksem.crm.security;

import com.marksem.crm.entity.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Data
public class CustomUserDetails implements UserDetails {

    private final String login;
    private final String password;
    private final List<SimpleGrantedAuthority> grantedAuthorities;
    private final boolean isActive;

    public CustomUserDetails(String login, String password, List<SimpleGrantedAuthority> grantedAuthorities, boolean isActive) {
        this.login = login;
        this.password = password;
        this.grantedAuthorities = grantedAuthorities;
        this.isActive = isActive;
    }

    public static UserDetails fromUserToCustomUserDetails(User user) {
        return new org.springframework.security.core.userdetails.User(user.getEmail(),
                user.getPassword(),
                true,
                true,
                true,
                true,
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name())));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isActive;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isActive;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isActive;
    }

    @Override
    public boolean isEnabled() {
        return isActive;
    }
}