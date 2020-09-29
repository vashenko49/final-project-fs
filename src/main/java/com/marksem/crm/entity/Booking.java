package com.marksem.crm.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "booking")
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Booking extends BaseEntity implements Serializable {
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date fromDate;
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date toDate;

    private String comment;
    @Column(name = "is_own")
    private boolean isOwn;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;
}
