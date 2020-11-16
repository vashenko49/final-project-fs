package com.marksem.crm.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthDtoRequest  implements Serializable {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}