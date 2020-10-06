package com.marksem.crm.dto.request;

import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.entity.enums.Currency;
import com.marksem.crm.entity.enums.TypeOfFinance;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDtoRequest extends BaseDtoRequest{
    @NotNull(
            groups = {New.class, Update.class}
    )
    private Double sum;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private Currency currency;
    @NotBlank(
            groups = {New.class, Update.class}
    )
    private TypeOfFinance type;
    @NotNull(
            groups = {New.class, Update.class}
    )
    private TransactionTypeDtoRequest transactionType;
}
