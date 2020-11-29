package com.marksem.crm.facade.user;

import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.service.user.UserService;
import org.springframework.stereotype.Component;

@Component
public class UserFacade {
    final private UserService userService;

    public UserFacade(UserService userService) {
        this.userService = userService;
    }

    public void create(CreateUserDtoRequest createUserDtoRequest) {
        userService.create(createUserDtoRequest);
    }

}
