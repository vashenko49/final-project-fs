package com.marksem.crm.repos;

import com.marksem.crm.entity.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    Page<Document> findAllByHouseId(Long id, Pageable pageable);
}
