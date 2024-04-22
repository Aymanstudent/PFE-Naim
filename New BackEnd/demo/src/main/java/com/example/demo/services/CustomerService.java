package com.example.demo.services;


import com.example.demo.models.Customer;
import com.example.demo.repositorys.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;
    public List<Customer> getCustomers() throws Exception{
        return this.customerRepository.findAll();
    }

    public List<Customer> getCustomersByCompany(Long id){
        return this.customerRepository.findCustomersByCompanyId(id);
    }

    public Optional<Customer> getCustomerById(Long id){
        return this.customerRepository.findById(id);
    }

    public Customer addCustomer(Customer customer){
        return this.customerRepository.save(customer);
    }

    public ResponseEntity<String> updateCustomer(Customer customer){
        this.customerRepository.save(customer);
        return new ResponseEntity<>("Votre client a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteCustomer(Long id){
        this.customerRepository.deleteById(id);
        return new ResponseEntity<>("Votre client (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteCustomers(){
        this.customerRepository.deleteAll();
        return new ResponseEntity<>("Tout les clients ont été bien supprimer", HttpStatus.OK);
    }
}
