package com.marksem.crm.repos.user;

import com.marksem.crm.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
    User findByEmail(String email);
}
