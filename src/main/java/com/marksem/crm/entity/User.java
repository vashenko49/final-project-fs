package com.marksem.crm.entity;

import com.marksem.crm.entity.enums.Currency;
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
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {
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
    @Enumerated(EnumType.STRING)
    private Currency currency;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Contact> contacts = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<House> houses = new ArrayList<>();
}
