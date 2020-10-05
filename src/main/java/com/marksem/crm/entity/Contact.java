package com.marksem.crm.entity;

import com.marksem.crm.entity.enums.TypeContact;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "contacts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact extends BaseEntity  {
    @Enumerated(EnumType.STRING)
    private TypeContact type;
    private String value;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false, updatable = false)
    private Customer customer;
}
