package com.example.demo.controllers;


import com.example.demo.models.Company;
import com.example.demo.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("get")
    public List<Company> getAllCompanies() {
        return this.companyService.getAllCompanies();
    }

    @GetMapping("get/{id}")
    public Optional<Company> getCompanyById(@PathVariable Long id) {
        return this.companyService.getCompanyById(id);
    }

    @PostMapping("add")
    public Company addCompany(@RequestBody Company company) {
        return this.companyService.addCompany(company);
    }

}
