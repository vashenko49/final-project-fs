package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.entity.enums.Language;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDtoRequest extends BaseDtoRequest {
    @NotBlank(
            message = "name is require"
    )
    private String name;
    @Pattern(
            regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$",
            message = "not valid password"
    )
    private String password;
    @Email
    private String email;
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid birth day"
    )
    private String birthDay;
    @NotBlank(
            message = "language is require"
    )
    private Language language;
}
