package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.Currency;
import com.marksem.crm.entity.enums.Language;
import com.marksem.crm.entity.enums.Role;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDtoRequest extends BaseDtoRequest {
    @NotBlank(
            message = "name is require",
            groups = {New.class, Update.class}
    )
    private String name;
    @Pattern(
            regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$",
            message = "not valid password",
            groups = {New.class}
    )
    private String password;
    @Email(groups = {New.class, Update.class})
    private String email;
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid birth day",
            groups = {New.class, Update.class}
    )
    private String birthDay;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private Language language;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private Currency currency;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private Role role;

    private List<ContactDtoRequest> contacts = new ArrayList<>();
}
