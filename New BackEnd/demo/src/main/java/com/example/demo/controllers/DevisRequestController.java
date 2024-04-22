package com.example.demo.controllers;


import com.example.demo.models.DevisRequest;
import com.example.demo.services.DevisRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("devisRequest")
@RestController
@RequiredArgsConstructor
public class DevisRequestController {

    private final DevisRequestService devisRequestService;

    @GetMapping("get/company/{id}")
    public List<DevisRequest> getDevisRequestsByCompany(@PathVariable Long id) {
        return this.devisRequestService.getDevisRequestsByCompany(id);
    }

    @GetMapping("get")
    public List<DevisRequest> getDevisRequests() throws Exception {
        return this.devisRequestService.getDevisRequests();
    }

    @GetMapping("get/{id}")
    public Optional<DevisRequest> getDevisRequestById(@PathVariable Long id) throws Exception {
        return this.devisRequestService.getDevisRequestById(id);
    }

    @PostMapping("add")
    public ResponseEntity<String> addDevisRequest(@RequestBody DevisRequest devisRequest) {
        return this.devisRequestService.addDevisRequest(devisRequest);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateDevisRequest(@RequestBody DevisRequest devisRequest) {
        return this.devisRequestService.updateDevisRequest(devisRequest);
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> deleteDevisRequests() {
        return this.devisRequestService.deleteDevisRequests();
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteDevisRequestById(@PathVariable Long id) {
        return this.devisRequestService.deleteDevisRequestById(id);
    }

}
