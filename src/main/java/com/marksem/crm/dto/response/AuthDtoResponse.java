package com.marksem.crm.dto.response;

import lombok.*;

import java.io.Serializable;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthDtoResponse  implements Serializable {
    private String token;
}
