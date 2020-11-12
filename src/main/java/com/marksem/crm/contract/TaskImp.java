package com.marksem.crm.contract;

import org.springframework.data.domain.Page;

public interface TaskImp<EntReq, EntRes> {
    Page<EntRes> findAllByHouseId(Long id, int page, int limit);
}
