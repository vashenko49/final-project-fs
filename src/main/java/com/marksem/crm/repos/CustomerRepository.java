package com.marksem.crm.repos;

import com.marksem.crm.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository <Customer, Long> {
    Customer findByEmail(String email);
}
