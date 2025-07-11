package com.akshita.springweb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.akshita.springweb.model.Country;
import com.akshita.springweb.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String code) {
        Optional<Country> result = countryRepository.findById(code);
        return result.orElse(null);
    }

    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    @Transactional
    public void updateCountry(String code, String newName) {
        Optional<Country> result = countryRepository.findById(code);
        if (result.isPresent()) {
            Country c = result.get();
            c.setName(newName);
            countryRepository.save(c);
        }
    }

    @Transactional
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
}
