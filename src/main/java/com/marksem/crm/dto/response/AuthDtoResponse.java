package com.marksem.crm.dto.response;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthDtoResponse extends BaseDtoResponse {
    private TokenDtoResponse token;
    private UserDtoResponse user;
}
