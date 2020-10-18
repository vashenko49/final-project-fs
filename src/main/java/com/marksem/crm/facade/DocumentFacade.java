package com.marksem.crm.facade;

import com.marksem.crm.contract.DefaultIml;
import com.marksem.crm.contract.DocumentImp;
import com.marksem.crm.dto.request.DocumentDtoRequest;
import com.marksem.crm.dto.response.DocumentDtoResponse;
import com.marksem.crm.entity.Document;
import com.marksem.crm.service.DocumentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DocumentFacade implements DefaultIml<DocumentDtoRequest, DocumentDtoResponse>, DocumentImp<DocumentDtoRequest, DocumentDtoResponse> {
    @Autowired
    private DocumentService documentService;

    @Autowired
    private ModelMapper mapper;

    @Override
    public DocumentDtoResponse save(DocumentDtoRequest obj) {
        return mapper.map(documentService.save(mapper.map(obj, Document.class)), DocumentDtoResponse.class);
    }

    @Override
    public DocumentDtoResponse update(DocumentDtoRequest obj) {
        return mapper.map(documentService.update(mapper.map(obj, Document.class)), DocumentDtoResponse.class);
    }

    @Override
    public void delete(DocumentDtoRequest obj) {
        documentService.delete(mapper.map(obj, Document.class));
    }

    @Override
    public void deleteAll(List<DocumentDtoRequest> ent) {
        documentService.deleteAll(ent.stream().map(accountDto -> mapper.map(accountDto, Document.class)).collect(Collectors.toList()));
    }

    @Override
    public void saveAll(List<DocumentDtoRequest> ent) {
        documentService.saveAll(ent.stream().map(accountDto -> mapper.map(accountDto, Document.class)).collect(Collectors.toList()));
    }

    @Override
    public Page<DocumentDtoResponse> findAll(int page, int limit) {
        return documentService.findAll(page, limit).map(account -> mapper.map(account, DocumentDtoResponse.class));
    }

    @Override
    public void deleteById(Long id) {
        documentService.deleteById(id);
    }

    @Override
    public Optional<DocumentDtoResponse> getById(Long id) {
        return documentService.getById(id).map(document -> mapper.map(document, DocumentDtoResponse.class));
    }


    @Override
    public Page<DocumentDtoResponse> findAllByHouseId(Long id, int page, int limit) {
        return documentService.findAllByHouseId(id, page, limit).map(account -> mapper.map(account, DocumentDtoResponse.class));
    }
}
