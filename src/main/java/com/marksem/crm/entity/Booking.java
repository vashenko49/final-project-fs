package com.marksem.crm.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity {
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date fromDate;
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date toDate;

    private String comment;
    @Column(name = "is_own")
    private boolean isOwn;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;
}
