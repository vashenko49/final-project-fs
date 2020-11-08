package com.marksem.crm.dto.request.task;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.dto.request.BaseDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.*;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDtoRequest extends BaseDtoRequest {
    @NotBlank(groups = {New.class})
    private String description;

    @NotNull(groups = {New.class})
    @Null(groups = {Update.class})
    private Long typeId;

    @Null(groups = {New.class})
    private Boolean status;

    @FutureOrPresent(groups = {New.class, Update.class})
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date deadline;

    @NotNull(groups = {New.class})
    @Null(groups = {Update.class})
    private Long houseId;
}
