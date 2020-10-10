package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.TypeContact;
import lombok.*;

import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private TypeContact type;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String value;
}
