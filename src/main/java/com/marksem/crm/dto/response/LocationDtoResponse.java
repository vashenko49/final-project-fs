package com.marksem.crm.dto.response;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationDtoResponse  extends BaseDtoResponse{
    private String address;
    private Double lat;
    private Double lng;
}
