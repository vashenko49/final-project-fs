package com.marksem.crm.dto.response;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionTypeDtoRequest extends BaseDtoResponse{
    private String type;
}
