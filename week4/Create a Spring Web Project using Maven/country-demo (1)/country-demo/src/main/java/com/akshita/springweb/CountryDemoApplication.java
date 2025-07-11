package com.akshita.springweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;

import com.akshita.springweb.model.Country;
import com.akshita.springweb.service.CountryService;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
@EntityScan(basePackages = "com.akshita.springweb.model") //
public class CountryDemoApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryDemoApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(CountryDemoApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
        testFindCountry();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start getAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("Countries: {}", countries);
        LOGGER.info("End getAllCountries");
    }

    private static void testFindCountry() {
        LOGGER.info("Start findCountryByCode");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Found: {}", country);
        LOGGER.info("End findCountryByCode");
    }

    private static void testAddCountry() {
        LOGGER.info("Start addCountry");
        Country newCountry = new Country();
        newCountry.setCode("NP");
        newCountry.setName("Nepal");
        countryService.addCountry(newCountry);
        LOGGER.info("End addCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start updateCountry");
        countryService.updateCountry("NP", "Nepal - Updated");
        LOGGER.info("End updateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start deleteCountry");
        countryService.deleteCountry("NP");
        LOGGER.info("End deleteCountry");
    }
}
