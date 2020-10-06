package com.marksem.crm.dto.response;

import com.marksem.crm.entity.enums.TypeDocument;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocumentDtoResponse extends BaseDtoResponse {
    private TypeDocument type;
    private String url;
    private String name;
}
