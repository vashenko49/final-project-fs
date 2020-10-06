package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.TaskType;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String description;
    private TaskType type;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Boolean status;
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid deadline",
            groups = {New.class, Update.class}
    )
    private Date deadline;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Long house;
}
