package com.marksem.crm.controller.task;


import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.dto.request.task.TaskTypeDtoRequest;
import com.marksem.crm.dto.response.task.TaskTypeDtoResponse;
import com.marksem.crm.facade.task.TaskTypeFacade;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task-type")
public class TaskTypeController {
    final private TaskTypeFacade taskTypeFacade;

    public TaskTypeController(TaskTypeFacade taskTypeFacade) {
        this.taskTypeFacade = taskTypeFacade;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskTypeDtoResponse> getTaskTypeById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.of(taskTypeFacade.getById(id));
    }

    @GetMapping
    public Page<TaskTypeDtoResponse> getAllTaskType(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "limit", required = false, defaultValue = "10") int limit) {
        return taskTypeFacade.findAll(page, limit);
    }

    @PostMapping()
    public ResponseEntity<TaskTypeDtoResponse> createTaskType(@Validated(New.class) @RequestBody TaskTypeDtoRequest taskType) {
        return ResponseEntity.ok(taskTypeFacade.save(taskType));
    }

    @PostMapping("/all")
    public void createManyTaskType(@Validated(New.class) @RequestBody List<TaskTypeDtoRequest> taskType) {
        taskTypeFacade.saveAll(taskType);
    }

    @PutMapping
    public ResponseEntity<TaskTypeDtoResponse> updateTaskType(@Validated(Update.class) @RequestBody TaskTypeDtoRequest taskType) {
        return ResponseEntity.ok(taskTypeFacade.update(taskType));
    }

    @DeleteMapping
    public void deleteTaskType(@RequestParam(value = "id") Long id) {
        taskTypeFacade.deleteById(id);
    }
}
