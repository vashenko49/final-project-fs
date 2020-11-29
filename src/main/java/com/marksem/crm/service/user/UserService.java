package com.marksem.crm.service.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.entity.User;
import com.marksem.crm.repos.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    final private UserRepository userRepository;
    final private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User save(User user) {
        System.out.println(passwordEncoder.encode(user.getPassword()));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void create(CreateUserDtoRequest createUserDtoRequest) {

    }
}
