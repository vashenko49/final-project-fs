package com.marksem.crm.controller.user;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.dto.request.user.CreateUserDtoRequest;
import com.marksem.crm.dto.request.user.UpdateProfileDtoRequest;
import com.marksem.crm.dto.response.UserDtoResponse;
import com.marksem.crm.dto.response.task.TaskDtoResponse;
import com.marksem.crm.facade.user.UserFacade;
import org.springframework.data.domain.Page;
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

    @GetMapping
    public Page<UserDtoResponse> getAllUsers(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "limit", required = false, defaultValue = "10") int limit) {
        return userFacade.getAllUsers(page, limit);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDtoResponse> getUserById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.ok(userFacade.getUserById(id));
    }

    @PutMapping(path = "updateProfile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void updateProfile(@Validated(Update.class) @ModelAttribute UpdateProfileDtoRequest updateProfileDtoRequest) {
       userFacade.updateProfile(updateProfileDtoRequest);
    }
}
