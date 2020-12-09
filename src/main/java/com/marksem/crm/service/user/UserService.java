package com.marksem.crm.service.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.dto.request.user.UpdateProfileDtoRequest;
import com.marksem.crm.entity.Contact;
import com.marksem.crm.entity.User;
import com.marksem.crm.entity.enums.Role;
import com.marksem.crm.exceptions.user.UserExistException;
import com.marksem.crm.exceptions.user.UserNotFoundException;
import com.marksem.crm.exceptions.user.UserNotHasPermitException;
import com.marksem.crm.repos.user.UserRepository;
import com.marksem.crm.service.MailService;
import com.marksem.crm.service.uploadFile.CloudinaryServiceIml;
import freemarker.template.TemplateException;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {
    final private UserRepository userRepository;
    final private PasswordEncoder passwordEncoder;
    final private CloudinaryServiceIml cloudinaryIml;
    final private MailService mailService;
    final private ModelMapper mapper;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CloudinaryServiceIml cloudinaryIml, MailService mailService, ModelMapper mapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.cloudinaryIml = cloudinaryIml;
        this.mailService = mailService;
        this.mapper = mapper;
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

        User userSave = userRepository.save(User.builder()
                .email(createUserDtoRequest.getEmail())
                .name(createUserDtoRequest.getName())
                .role(roleCreate)
                .password(passwordEncoder.encode(createUserDtoRequest.getPassword()))
                .urlAvatar(urlPhoto)
                .build());

        try {
            mailService.sendEmailAccountDetails(userSave.getEmail(), createUserDtoRequest.getPassword(), userSave.getEmail());
        } catch (IOException | MessagingException | TemplateException e) {
            throw new RuntimeException(e.getMessage());
        }
        return userSave;
    }

    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public void updateProfile(UpdateProfileDtoRequest updateProfileDtoRequest) {
        User user = getUserById(updateProfileDtoRequest.getId());

        if (updateProfileDtoRequest.getPhoto() != null) {
            String urlPhoto;
            try {
                urlPhoto = cloudinaryIml.upload(updateProfileDtoRequest.getPhoto(), "photos/" + updateProfileDtoRequest.getEmail());
            } catch (IOException e) {
                throw new RuntimeException("photo upload failed");
            }
            user.setUrlAvatar(urlPhoto);
        }

        user.setName(updateProfileDtoRequest.getName());
        user.setEmail(updateProfileDtoRequest.getEmail());

        if (updateProfileDtoRequest.getPhones() != null) {
            user.getContacts().addAll(updateProfileDtoRequest.getPhones()
                    .stream()
                    .map(contactDto -> {
                        Contact contact = mapper.map(contactDto, Contact.class);
                        contact.setUser(user);
                        return contact;
                    })
                    .collect(Collectors.toList())
            );
        }

        userRepository.saveAndFlush(user);
    }

    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        return userOptional.orElseThrow(UserNotFoundException::new);
    }

    @Transactional(readOnly = true)
    public Page<User> getAllUsers(int page, int limit) {
        return userRepository.findAll(PageRequest.of(page, limit));
    }
}
