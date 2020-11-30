package com.marksem.crm.dto.request.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.dto.request.BaseDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.Role;
import com.marksem.crm.validation.enums.EnumValue;
import com.marksem.crm.validation.file.FileType;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserDtoRequest extends BaseDtoRequest {
    @NotBlank(groups = {New.class, Update.class})
    @EnumValue(enumClass = Role.class, ignoreCase = true, groups = {New.class, Update.class})
    private String type;

    @NotBlank(groups = {New.class, Update.class})
    private String name;

    @Null(groups = {Update.class})
    @NotBlank(groups = {New.class})
    @Email(groups = {New.class})
    private String email;

    @NotBlank(groups = {New.class, Update.class})
    @Size(min = 6, groups = {New.class, Update.class})
    private String password;

    @FileType(value = {"image/jpg", "image/jpeg", "image/png"}, groups = {New.class, Update.class})
    private MultipartFile photo;
}
