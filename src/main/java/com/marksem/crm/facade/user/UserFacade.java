package com.marksem.crm.facade.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.dto.request.user.UpdateProfileDtoRequest;
import com.marksem.crm.dto.response.UserDtoResponse;
import com.marksem.crm.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class UserFacade {
    final private UserService userService;
    final private ModelMapper mapper;

    public UserFacade(UserService userService, ModelMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    public UserDtoResponse create(CreateUserDtoRequest createUserDtoRequest) {
        return mapper.map(userService.save(createUserDtoRequest), UserDtoResponse.class);
    }

    public void updateProfile(UpdateProfileDtoRequest user) {
        userService.updateProfile(user);
    }

    public Page<UserDtoResponse> getAllUsers(int page, int limit) {
        return userService.getAllUsers(page, limit).map(user -> mapper.map(user, UserDtoResponse.class));
    }

    public UserDtoResponse getUserById(Long id) {
        return mapper.map(userService.getUserById(id), UserDtoResponse.class);
    }
}
