package com.marksem.crm.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.entity.enums.TaskType;
import lombok.*;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDtoResponse extends BaseDtoResponse {
    private String description;
    private TaskType type;
    private Boolean status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date deadline;
}
