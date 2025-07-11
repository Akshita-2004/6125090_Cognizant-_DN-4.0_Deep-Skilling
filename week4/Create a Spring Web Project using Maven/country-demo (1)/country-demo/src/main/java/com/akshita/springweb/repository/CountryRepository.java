package com.akshita.springweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.akshita.springweb.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}
