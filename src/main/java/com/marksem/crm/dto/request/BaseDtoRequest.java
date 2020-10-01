package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.Update;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDtoRequest {
    @NotNull(groups = {Update.class})
    private Long id;
    @NotNull(groups = {Update.class})
    private int version;
}
