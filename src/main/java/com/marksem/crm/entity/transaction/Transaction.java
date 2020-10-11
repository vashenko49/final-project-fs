package com.marksem.crm.entity.transaction;

import com.marksem.crm.entity.BaseEntity;
import com.marksem.crm.entity.enums.Currency;
import com.marksem.crm.entity.enums.TypeOfFinance;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transactions")
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity {
    private Double sum;
    @Enumerated(EnumType.STRING)
    private Currency currency;
    @Enumerated(EnumType.STRING)
    private TypeOfFinance type;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "transactionGroup_id", referencedColumnName = "id", nullable = false, updatable = false)
    private TransactionGroup transactionGroup;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "transactionType_id", referencedColumnName = "id", nullable = false, updatable = false)
    private TransactionType transactionType;
}

