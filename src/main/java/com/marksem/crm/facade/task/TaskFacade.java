package com.marksem.crm.facade.task;

import com.marksem.crm.contract.Default;
import com.marksem.crm.contract.TaskImp;
import com.marksem.crm.dto.request.task.TaskDtoRequest;
import com.marksem.crm.dto.response.task.TaskDtoResponse;
import com.marksem.crm.entity.task.Task;
import com.marksem.crm.service.HouseService;
import com.marksem.crm.service.task.TaskService;
import com.marksem.crm.service.task.TaskTypeService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class TaskFacade implements Default<TaskDtoRequest, TaskDtoResponse>, TaskImp<TaskDtoRequest, TaskDtoResponse> {
    final private TaskService taskService;
    final private TaskTypeService taskTypeService;
    final private HouseService houseService;
    final private ModelMapper mapper;

    public TaskFacade(TaskService taskService, TaskTypeService taskTypeService, HouseService  houseService, ModelMapper mapper) {
        this.taskService = taskService;
        this.taskTypeService = taskTypeService;
        this.houseService = houseService;
        this.mapper = mapper;
    }

    @Override
    public TaskDtoResponse save(TaskDtoRequest obj) {
        Task task = mapper.map(obj, Task.class);
        task.setTaskType(taskTypeService.getOneById(obj.getTypeId()));
        task.setHouse(houseService.getOneById(obj.getHouseId()));
        task.setStatus(true);
        return mapper.map(taskService.save(task), TaskDtoResponse.class);
    }

    @Override
    public TaskDtoResponse update(TaskDtoRequest obj) {
        Task task = mapper.map(obj, Task.class);
        Task refTask = taskService.getOneById(obj.getId());
        if(obj.getDescription() == null) task.setDescription(refTask.getDescription());
        if(obj.getDeadline() == null) task.setDeadline(refTask.getDeadline());
        if(obj.getStatus() == null) task.setStatus(refTask.getStatus());
        return mapper.map(taskService.update(task), TaskDtoResponse.class);
    }

    @Override
    public void delete(TaskDtoRequest obj) {
        taskService.delete(mapper.map(obj, Task.class));
    }

    @Override
    public void deleteAll(List<TaskDtoRequest> ent) {
        taskService.deleteAll(ent.stream().map(accountDto -> mapper.map(accountDto, Task.class)).collect(Collectors.toList()));
    }

    @Override
    public void saveAll(List<TaskDtoRequest> ent) {
        taskService.saveAll(ent.stream().map(accountDto -> mapper.map(accountDto, Task.class)).collect(Collectors.toList()));
    }

    @Override
    public Page<TaskDtoResponse> findAll(int page, int limit) {
        return taskService.findAll(page, limit).map(account -> mapper.map(account, TaskDtoResponse.class));
    }

    @Override
    public void deleteById(Long id) {
        taskService.deleteById(id);
    }

    @Override
    public Optional<TaskDtoResponse> getById(Long id) {
        return taskService.getById(id).map(task -> mapper.map(task, TaskDtoResponse.class));
    }

    @Override
    public Page<TaskDtoResponse> findAllByHouseId(Long id, int page, int limit) {
        return taskService.findAllByHouseId(id, page, limit).map(task -> mapper.map(task, TaskDtoResponse.class));
    }
}
