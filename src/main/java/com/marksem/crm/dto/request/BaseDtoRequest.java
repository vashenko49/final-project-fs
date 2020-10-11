package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDtoRequest implements Serializable {
    @Null(groups = {New.class})
    @NotNull(groups = {Update.class})
    private Long id;
    @Null(groups = {New.class})
    @NotNull(groups = {Update.class})
    private int version;
}
