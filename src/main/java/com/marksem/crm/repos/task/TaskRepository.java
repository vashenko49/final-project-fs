package com.marksem.crm.repos.task;

import com.marksem.crm.entity.task.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository <Task, Long> {
    Page<Task> findAllByHouseId(Long id, Pageable pageable);
}
