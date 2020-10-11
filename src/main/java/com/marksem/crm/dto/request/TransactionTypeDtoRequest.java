package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionTypeDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String type;
}
