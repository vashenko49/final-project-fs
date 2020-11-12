package com.marksem.crm.service.task;

import com.marksem.crm.contract.Default;
import com.marksem.crm.contract.TaskImp;
import com.marksem.crm.entity.task.Task;
import com.marksem.crm.entity.task.TaskType;
import com.marksem.crm.repos.task.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service("taskService")
@Transactional(isolation = Isolation.SERIALIZABLE)
public class TaskService implements Default<Task, Task>, TaskImp<Task, Task> {
    final private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task save(Task obj) {
        return taskRepository.saveAndFlush(obj);
    }

    @Override
    public Task update(Task obj) {
        this.getById(obj.getId()).orElseThrow(RuntimeException::new);
        return taskRepository.saveAndFlush(obj);
    }

    @Override
    public void delete(Task obj) {
        taskRepository.delete(obj);
    }

    @Override
    public void deleteAll(List<Task> ent) {
        taskRepository.deleteAll(ent);
    }

    @Override
    public void saveAll(List<Task> ent) {
        taskRepository.saveAll(ent);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Task> findAll(int page, int limit) {
        return taskRepository.findAll(PageRequest.of(page, limit));
    }

    @Override
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Task> getById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Task> findAllByHouseId(Long id, int page, int limit) {
        return taskRepository.findAllByHouseId(id, PageRequest.of(page, limit));
    }

    public Task getOneById(Long id) {
        return taskRepository.getOne(id);
    }
}

