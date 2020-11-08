package com.marksem.crm.dto.response.task;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.dto.response.BaseDtoResponse;
import com.marksem.crm.dto.response.HouseDtoResponse;
import lombok.*;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDtoResponse extends BaseDtoResponse {
    private String description;
    private TaskTypeDtoResponse taskType;
    private Boolean status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private Date deadline;
    private HouseDtoResponse house;
}
