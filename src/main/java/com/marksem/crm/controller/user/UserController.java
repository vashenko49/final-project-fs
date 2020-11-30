package com.marksem.crm.controller.user;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.dto.response.UserDtoResponse;
import com.marksem.crm.facade.user.UserFacade;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users/")
public class UserController {
    final private UserFacade userFacade;

    public UserController(UserFacade userFacade) {
        this.userFacade = userFacade;
    }

    @PostMapping(path = "create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UserDtoResponse> createUser(@Validated(New.class) @ModelAttribute CreateUserDtoRequest user) {
        return ResponseEntity.ok(userFacade.create(user));
    }
}
