package com.marksem.crm.service;

import com.marksem.crm.contract.Default;
import com.marksem.crm.contract.DocumentImp;
import com.marksem.crm.entity.Document;
import com.marksem.crm.repos.DocumentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service("documentService")
@Transactional(isolation = Isolation.SERIALIZABLE)
public class DocumentService implements Default<Document, Document>, DocumentImp<Document, Document> {
    final private DocumentRepository documentRepository;

    public DocumentService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    @Override
    public Document save(Document obj) {
        return documentRepository.save(obj);
    }

    @Override
    public Document update(Document obj) {
        return documentRepository.save(obj);
    }

    @Override
    public void delete(Document obj) {
        documentRepository.delete(obj);
    }

    @Override
    public void deleteAll(List<Document> ent) {
        documentRepository.deleteAll(ent);
    }

    @Override
    public void saveAll(List<Document> ent) {
        documentRepository.saveAll(ent);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Document> findAll(int page, int limit) {
        return documentRepository.findAll(PageRequest.of(page, limit));
    }

    @Override
    public void deleteById(Long id) {
        documentRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Document> getById(Long id) {
        return documentRepository.findById(id);
    }


    @Override
    @Transactional(readOnly = true)
    public Page<Document> findAllByHouseId(Long id, int page, int limit) {
        return documentRepository.findAllByHouseId(id, PageRequest.of(page, limit));
    }
}
