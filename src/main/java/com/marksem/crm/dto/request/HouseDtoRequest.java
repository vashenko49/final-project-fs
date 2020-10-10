package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String equipment;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String description;
    @NotNull(
            groups = {New.class, Update.class}
    )
    @Positive
    private Double area;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private LocationDtoRequest location;
}
