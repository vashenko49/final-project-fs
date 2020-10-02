package com.marksem.crm.entity;

import com.marksem.crm.entity.enums.TypeDocument;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private TypeDocument type;
    private String url;
    private String name;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "house_id", referencedColumnName = "id", nullable = false, updatable = false)
    private House house;
}
