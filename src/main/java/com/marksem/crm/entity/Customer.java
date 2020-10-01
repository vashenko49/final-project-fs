package com.marksem.crm.entity;

import com.marksem.crm.entity.enums.Language;
import com.marksem.crm.entity.enums.Role;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Builder
@Entity
@Table(name = "customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer extends BaseEntity {
    private String name;
    private String password;
    private String email;
    @Basic
    @Temporal(TemporalType.DATE)
    private Date birthDay;
    @Column(name = "url_avatar")
    private String urlAvatar;
    @Enumerated(EnumType.STRING)
    private Role role;
    @Enumerated(EnumType.STRING)
    private Language language;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Contact> accounts = new ArrayList<>();
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<House> houses = new ArrayList<>();
}
