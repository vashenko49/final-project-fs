package com.marksem.crm.controller;


import com.marksem.crm.dto.request.DocumentDtoRequest;
import com.marksem.crm.dto.request.groups.New;
import com.marksem.crm.dto.request.groups.Update;
import com.marksem.crm.dto.response.DocumentDtoResponse;
import com.marksem.crm.facade.DocumentFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api0/document")
public class DocumentController {

    @Autowired
    DocumentFacade documentFacade;

    @GetMapping("/{id}")
    public DocumentDtoResponse getDocumentById(@PathVariable(value = "id") Long id) {
        return documentFacade.getById(id).get();
    }

    @GetMapping("")
    public Page<DocumentDtoResponse> getAllDocument(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "limit", required = false, defaultValue = "10") int limit) {
        return documentFacade.findAll(page, limit);
    }

    @PostMapping("")
    public DocumentDtoResponse createDocument(@Validated(New.class) @RequestBody DocumentDtoRequest document) {
        return documentFacade.save(document);
    }

    @PostMapping("/all")
    public void createDocument(@Validated(New.class) @RequestBody List<DocumentDtoRequest> documents) {
        documentFacade.saveAll(documents);
    }

    @PutMapping("")
    public DocumentDtoResponse updateDocument(@Validated(Update.class) @RequestBody DocumentDtoRequest document) {
        return documentFacade.update(document);
    }

    @DeleteMapping("")
    public void deleteDocument(@RequestParam(value = "id") Long id) {
        documentFacade.deleteById(id);
    }
}
