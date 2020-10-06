package com.marksem.crm.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.marksem.crm.entity.transaction.Transaction;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroupDtoResponse extends BaseDtoResponse{
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date fromDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date toDate;
    private List<Transaction> transactions = new ArrayList<>();
}
