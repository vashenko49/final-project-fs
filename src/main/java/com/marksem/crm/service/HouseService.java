package com.marksem.crm.service;

import com.marksem.crm.contract.Default;
import com.marksem.crm.entity.House;
import com.marksem.crm.repos.HouseRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service("houseService")
@Transactional(isolation = Isolation.SERIALIZABLE)
public class HouseService implements Default<House, House> {
    final private HouseRepository houseRepository;

    public HouseService(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    @Override
    public House save(House obj) {
        return null;
    }

    @Override
    public House update(House obj) {
        return null;
    }

    @Override
    public void delete(House obj) {
    }

    @Override
    public void deleteAll(List<House> ent) {
    }

    @Override
    public void saveAll(List<House> ent) {
    }

    @Override
    public Page<House> findAll(int page, int limit) {
        return null;
    }

    @Override
    public void deleteById(Long id) {
    }

    @Override
    public Optional<House> getById(Long id) {
        return Optional.empty();
    }

    public House getOneById(Long id) {
        return houseRepository.getOne(id);
    }
}
