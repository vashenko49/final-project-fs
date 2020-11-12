package com.marksem.crm.repos.task;

import com.marksem.crm.entity.task.TaskType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskTypeRepository extends JpaRepository <TaskType, Long> {
}
