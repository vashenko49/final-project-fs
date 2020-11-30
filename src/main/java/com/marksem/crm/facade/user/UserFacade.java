package com.marksem.crm.facade.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.dto.response.UserDtoResponse;
import com.marksem.crm.service.user.UserService;
import org.modelmapper.ModelMapper;
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

}
