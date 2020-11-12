package com.marksem.crm.dto.response.task;

import com.marksem.crm.dto.response.BaseDtoResponse;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTypeDtoResponse extends BaseDtoResponse {
    private String type;
    private String name;
}
