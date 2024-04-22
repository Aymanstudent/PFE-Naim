package com.example.demo.controllers;


import com.example.demo.models.Supplier;
import com.example.demo.services.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("supplier")
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierService supplierService;

    @GetMapping("get/company/{id}")
    public List<Supplier> getSuppliersCompany(@PathVariable Long id){
        return this.supplierService.getSuppliersByCompany(id);
    }

    @GetMapping("get")
    public List<Supplier> getSuppliers() throws Exception{
        return this.supplierService.getSuppliers();
    }

    @PostMapping("add")
    public ResponseEntity<String> addSupplier(@RequestBody Supplier supplier){
        return this.supplierService.addSupplier(supplier);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateSuplier(@RequestBody Supplier supplier){
        return this.supplierService.updateSuplier(supplier);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable Long id){
        return this.supplierService.deleteSupplier(id);
    }
}
