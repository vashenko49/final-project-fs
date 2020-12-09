package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.TypeContact;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDtoRequest implements Serializable {

    private Long id;

    @NotBlank(groups = {New.class, Update.class})
    private TypeContact type;

    @NotBlank(groups = {New.class, Update.class})
    @Size(min = 10, groups = {New.class, Update.class})
    private String value;
}
