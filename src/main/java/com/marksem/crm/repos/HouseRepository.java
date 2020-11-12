package com.marksem.crm.repos;

import com.marksem.crm.entity.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepository extends JpaRepository <House, Long> {
}
