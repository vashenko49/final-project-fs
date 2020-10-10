package com.marksem.crm.dto.response;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseDtoResponse extends BaseDtoResponse {
    private String equipment;
    private String description;
    private Double area;
    private LocationDtoResponse location;
}
