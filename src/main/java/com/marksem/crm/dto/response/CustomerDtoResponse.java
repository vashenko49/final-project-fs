package com.marksem.crm.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.entity.enums.Currency;
import com.marksem.crm.entity.enums.Language;
import com.marksem.crm.entity.enums.Role;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDtoResponse extends BaseDtoResponse {
    private String name;
    private String password;
    private String email;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date birthDay;
    private String urlAvatar;
    private Role role;
    private Currency currency;
    private Language language;
    private List<ContactDtoResponse> contacts = new ArrayList<>();
}