package com.marksem.crm.service.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.entity.User;
import com.marksem.crm.entity.enums.Role;
import com.marksem.crm.exceptions.user.UserExistException;
import com.marksem.crm.exceptions.user.UserNotHasPermitException;
import com.marksem.crm.repos.user.UserRepository;
import com.marksem.crm.service.uploadFile.CloudinaryServiceIml;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class UserService {
    final private UserRepository userRepository;
    final private PasswordEncoder passwordEncoder;
    final private CloudinaryServiceIml cloudinaryIml;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CloudinaryServiceIml cloudinaryIml) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.cloudinaryIml = cloudinaryIml;
    }

    public boolean isPermitCreateUserForRole(Role createUserRole, Role userSenderRole) {
        Map<Role, Set<Role>> permit = new HashMap<>();
        permit.put(Role.ADMIN, Set.of(Role.values()));
        permit.put(Role.MANAGER, Set.of(Role.CLIENT));
        return permit.get(userSenderRole).contains(createUserRole);
    }

    public User save(CreateUserDtoRequest createUserDtoRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        List<GrantedAuthority> listAuthorities = new ArrayList<>(authentication.getAuthorities());
        Role roleSender = Role.valueOf(listAuthorities.get(0).toString().toUpperCase());
        Role roleCreate = Role.valueOf(createUserDtoRequest.getType().toUpperCase());

        userRepository.findByEmail(createUserDtoRequest.getEmail()).ifPresent(i -> {
            throw new UserExistException();
        });
        if (!isPermitCreateUserForRole(roleCreate, roleSender)) {
            throw new UserNotHasPermitException("user not has authority for create this type user");
        }

        String urlPhoto;
        try {
            urlPhoto = cloudinaryIml.upload(createUserDtoRequest.getPhoto(), "photos/" + createUserDtoRequest.getEmail());
        } catch (IOException e) {
            throw new RuntimeException("photo upload failed");
        }

        return userRepository.save(User.builder()
                .email(createUserDtoRequest.getEmail())
                .name(createUserDtoRequest.getName())
                .role(roleCreate)
                .password(passwordEncoder.encode(createUserDtoRequest.getPassword()))
                .urlAvatar(urlPhoto)
                .build());
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }
}
