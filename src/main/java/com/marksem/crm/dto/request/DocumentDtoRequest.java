package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.TypeDocument;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocumentDtoRequest extends BaseDtoRequest {
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private TypeDocument type;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String url;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String name;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Long house;
}
