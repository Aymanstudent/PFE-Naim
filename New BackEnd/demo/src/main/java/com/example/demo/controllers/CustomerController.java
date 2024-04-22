package com.example.demo.controllers;


import com.example.demo.models.Customer;
import com.example.demo.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("customer")
@RestController
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService clientService;


    @GetMapping("get/company/{id}")
    public List<Customer> getCustomersByCompany(@PathVariable Long id) {
        return this.clientService.getCustomersByCompany(id);
    }

    @GetMapping("get")
    public List<Customer> getCustomers() throws Exception {
        return this.clientService.getCustomers();
    }

    @GetMapping("get/{id}")
    public Optional<Customer> getCustomerById(@PathVariable Long id) {
        return this.clientService.getCustomerById(id);
    }

    @PostMapping("add")
    public Customer addCustomer(@RequestBody Customer customer) {
        Customer customer1 = clientService.addCustomer(customer);
        return customer1;
    }

    @PutMapping("update")
    public ResponseEntity<String> updateCustomer(@RequestBody Customer customer) {
        return clientService.updateCustomer(customer);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        return clientService.deleteCustomer(id);
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> supprimer_tout() {
        return clientService.deleteCustomers();
    }
}
