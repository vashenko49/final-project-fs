package com.marksem.crm.dto.request.task;

import com.marksem.crm.dto.request.BaseDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTypeDtoRequest extends BaseDtoRequest {
    @NotBlank(groups = {New.class})
    @Null(groups = {Update.class})
    private String type;

    @NotBlank(groups = {New.class, Update.class})
    private String name;
}
