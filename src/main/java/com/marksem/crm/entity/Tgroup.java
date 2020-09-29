package com.marksem.crm.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tgroup")
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Tgroup extends BaseEntity implements Serializable {
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date fromDate;
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date toDate;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;

    @OneToMany(mappedBy = "tgroup", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Ttransaction> ttransactions = new ArrayList<>();
}
