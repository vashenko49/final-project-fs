package com.marksem.crm.entity.transaction;

import com.marksem.crm.entity.BaseEntity;
import com.marksem.crm.entity.House;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transaction_groups")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroup extends BaseEntity {
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date fromDate;
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date toDate;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;

    @OneToMany(mappedBy = "transactionGroup", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Transaction> transactions = new ArrayList<>();
}
