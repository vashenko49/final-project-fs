package com.marksem.crm.contract;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DocumentImp<EntReq, EntRes> {
    Page<EntRes> findAllByHouseId(Long id, int page, int limit);
}
