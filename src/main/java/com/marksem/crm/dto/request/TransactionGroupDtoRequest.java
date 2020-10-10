package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroupDtoRequest  extends BaseDtoRequest{
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid from date",
            groups = {New.class, Update.class}
    )
    private Date fromDate;
    @Pattern(
            regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))",
            message = "not valid to date",
            groups = {New.class, Update.class}
    )
    private Date toDate;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Long house;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private List<TransactionDtoRequest> transactions = new ArrayList<>();
}
