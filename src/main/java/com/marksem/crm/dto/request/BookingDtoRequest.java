package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDtoRequest extends BaseDtoRequest {
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid birth day",
            groups = {New.class, Update.class}
    )
    private Date fromDate;
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid birth day",
            groups = {New.class, Update.class}
    )
    private Date toDate;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private String comment;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private boolean isOwn;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Long house;
}
