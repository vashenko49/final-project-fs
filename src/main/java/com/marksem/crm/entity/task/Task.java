package com.marksem.crm.entity.task;

import com.marksem.crm.entity.BaseEntity;
import com.marksem.crm.entity.House;
import com.marksem.crm.entity.transaction.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task extends BaseEntity {
    private String description;
    private Boolean status;
    private Date deadline;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "taskType_id", referencedColumnName = "id", nullable = false, updatable = false)
    private TaskType taskType;
}
