package com.marksem.crm.dto.response;

import com.marksem.crm.entity.enums.Currency;
import com.marksem.crm.entity.enums.TypeOfFinance;
import com.marksem.crm.entity.transaction.TransactionType;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDtoResponse extends BaseDtoResponse {
    private Double sum;
    private Currency currency;
    private TypeOfFinance type;
    private TransactionType transactionType;
}
