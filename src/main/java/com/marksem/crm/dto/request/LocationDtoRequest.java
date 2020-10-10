package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String address;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Double lat;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Double lng;
}
