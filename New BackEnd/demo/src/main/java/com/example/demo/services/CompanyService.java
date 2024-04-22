package com.example.demo.services;


import com.example.demo.models.Company;
import com.example.demo.repositorys.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(long id) {
        return companyRepository.findById(id);
    }

    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }
}
