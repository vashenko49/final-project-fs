package com.marksem.crm.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "ttransaction")
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Ttransaction extends BaseEntity implements Serializable {
    private Double sum;
    @Enumerated(EnumType.STRING)
    private TypeOfFinance type;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "tgroup_id", referencedColumnName = "id", nullable = false, updatable = false)
    private Tgroup tgroup;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "ttype_id", referencedColumnName = "id", nullable = false, updatable = false)
    private Tgroup ttype;
}
