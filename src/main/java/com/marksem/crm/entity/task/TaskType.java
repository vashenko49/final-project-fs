package com.marksem.crm.entity.task;

import com.marksem.crm.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "task_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskType extends BaseEntity {
    @Column(unique=true, updatable = false)
    private String type;
    private String name;
    @OneToMany(mappedBy = "taskType", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();
}
