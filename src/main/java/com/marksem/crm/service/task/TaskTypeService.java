package com.marksem.crm.service.task;

import com.marksem.crm.contract.Default;
import com.marksem.crm.entity.task.TaskType;
import com.marksem.crm.repos.task.TaskTypeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service("taskTypeService")
@Transactional(isolation = Isolation.SERIALIZABLE)
public class TaskTypeService implements Default<TaskType, TaskType> {
    final private TaskTypeRepository taskTypeRepository;

    public TaskTypeService(TaskTypeRepository taskTypeRepository) {
        this.taskTypeRepository = taskTypeRepository;
    }

    @Override
    public TaskType save(TaskType obj) {
        return taskTypeRepository.saveAndFlush(obj);
    }

    @Override
    public TaskType update(TaskType obj) {
        this.getById(obj.getId()).orElseThrow(RuntimeException::new);
        return taskTypeRepository.saveAndFlush(obj);
    }

    @Override
    public void delete(TaskType obj) {
        taskTypeRepository.delete(obj);
    }

    @Override
    public void deleteAll(List<TaskType> ent) {
        taskTypeRepository.deleteAll(ent);
    }

    @Override
    public void saveAll(List<TaskType> ent) {
        taskTypeRepository.saveAll(ent);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<TaskType> findAll(int page, int limit) {
        return taskTypeRepository.findAll(PageRequest.of(page, limit));
    }

    @Override
    public void deleteById(Long id) {
        taskTypeRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<TaskType> getById(Long id) {
        return taskTypeRepository.findById(id);
    }

    public TaskType getOneById(Long id) {
        return taskTypeRepository.getOne(id);
    }
}

