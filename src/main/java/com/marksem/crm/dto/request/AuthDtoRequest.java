package com.marksem.crm.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthDtoRequest implements Serializable {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}