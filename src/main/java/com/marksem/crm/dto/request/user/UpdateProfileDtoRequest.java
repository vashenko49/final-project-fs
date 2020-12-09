package com.marksem.crm.dto.request.user;

import com.marksem.crm.dto.request.BaseDtoRequest;
import com.marksem.crm.dto.request.ContactDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.validation.file.FileType;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateProfileDtoRequest extends BaseDtoRequest {

    @NotBlank(groups = {New.class, Update.class})
    private String name;

    @NotBlank(groups = {New.class, Update.class})
    @Email(groups = {New.class, Update.class})
    private String email;

    private List<ContactDtoRequest> phones;

    @FileType(value = {"image/jpg", "image/jpeg", "image/png"}, groups = {New.class, Update.class})
    private MultipartFile photo;
}
