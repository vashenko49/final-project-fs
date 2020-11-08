package com.marksem.crm.controller.task;


import com.marksem.crm.dto.request.task.TaskDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.dto.response.task.TaskDtoResponse;
import com.marksem.crm.facade.task.TaskFacade;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
public class TaskController {
    final private TaskFacade taskFacade;

    public TaskController(TaskFacade taskFacade) {
        this.taskFacade = taskFacade;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDtoResponse> getTaskById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.of(taskFacade.getById(id));
    }

    @GetMapping("/house/{id}")
    public Page<TaskDtoResponse> getAllTaskByHouseId(
            @PathVariable(value = "id") Long id,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "limit", required = false, defaultValue = "10") int limit) {
        return taskFacade.findAllByHouseId(id, page, limit);
    }

    @GetMapping
    public Page<TaskDtoResponse> getAllTask(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "limit", required = false, defaultValue = "10") int limit) {
        return taskFacade.findAll(page, limit);
    }

    @PostMapping
    public ResponseEntity<TaskDtoResponse> createTask(@Validated(New.class) @RequestBody TaskDtoRequest task) {
        return ResponseEntity.ok(taskFacade.save(task));
    }

    @PostMapping("/all")
    public void createTask(@Validated(New.class) @RequestBody List<TaskDtoRequest> tasks) {
        taskFacade.saveAll(tasks);
    }

    @PutMapping
    public ResponseEntity<TaskDtoResponse> updateTask(@Validated(Update.class) @RequestBody TaskDtoRequest task) {
        return ResponseEntity.ok(taskFacade.update(task));
    }

    @DeleteMapping
    public void deleteTask(@RequestParam(value = "id") Long id) {
        taskFacade.deleteById(id);
    }
}
