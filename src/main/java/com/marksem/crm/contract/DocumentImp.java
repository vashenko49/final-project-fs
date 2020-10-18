package com.marksem.crm.contract;

import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface DocumentImp<EntReq, EntRes> {
    Page<EntRes> findAllByHouseId(Long id, int page, int limit);
}
