package com.marksem.crm.repos;

import com.marksem.crm.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Document, Long> {

}
