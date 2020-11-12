package com.marksem.crm.facade.task;

import com.marksem.crm.contract.Default;
import com.marksem.crm.contract.TaskImp;
import com.marksem.crm.dto.request.task.TaskTypeDtoRequest;
import com.marksem.crm.dto.response.task.TaskTypeDtoResponse;
import com.marksem.crm.entity.task.Task;
import com.marksem.crm.entity.task.TaskType;
import com.marksem.crm.service.task.TaskTypeService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class TaskTypeFacade implements Default<TaskTypeDtoRequest, TaskTypeDtoResponse> {
    final private TaskTypeService taskTypeService;
    final private ModelMapper mapper;

    public TaskTypeFacade(TaskTypeService taskTypeService, ModelMapper mapper) {
        this.taskTypeService = taskTypeService;
        this.mapper = mapper;
    }

    @Override
    public TaskTypeDtoResponse save(TaskTypeDtoRequest obj) {
        return mapper.map(taskTypeService.save(mapper.map(obj, TaskType.class)), TaskTypeDtoResponse.class);
    }

    @Override
    public TaskTypeDtoResponse update(TaskTypeDtoRequest obj) {
        return mapper.map(taskTypeService.update(mapper.map(obj, TaskType.class)), TaskTypeDtoResponse.class);
    }

    @Override
    public void delete(TaskTypeDtoRequest obj) {
        taskTypeService.delete(mapper.map(obj, TaskType.class));
    }

    @Override
    public void deleteAll(List<TaskTypeDtoRequest> ent) {
        taskTypeService.deleteAll(ent.stream().map(accountDto -> mapper.map(accountDto, TaskType.class)).collect(Collectors.toList()));
    }

    @Override
    public void saveAll(List<TaskTypeDtoRequest> ent) {
        taskTypeService.saveAll(ent.stream().map(accountDto -> mapper.map(accountDto, TaskType.class)).collect(Collectors.toList()));
    }

    @Override
    public Page<TaskTypeDtoResponse> findAll(int page, int limit) {
        return taskTypeService.findAll(page, limit).map(account -> mapper.map(account, TaskTypeDtoResponse.class));
    }

    @Override
    public void deleteById(Long id) {
        taskTypeService.deleteById(id);
    }

    @Override
    public Optional<TaskTypeDtoResponse> getById(Long id) {
        return taskTypeService.getById(id).map(taskType -> mapper.map(taskType, TaskTypeDtoResponse.class));
    }
}
