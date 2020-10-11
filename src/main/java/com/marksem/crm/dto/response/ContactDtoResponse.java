package com.marksem.crm.dto.response;

import com.marksem.crm.entity.enums.TypeContact;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDtoResponse extends BaseDtoResponse {
    private TypeContact type;
    private String value;
}
