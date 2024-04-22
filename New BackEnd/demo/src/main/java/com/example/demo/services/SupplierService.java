package com.example.demo.services;


import com.example.demo.models.Supplier;
import com.example.demo.repositorys.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    public List<Supplier> getSuppliersByCompany(Long id) {
        return this.supplierRepository.findBySupplierCompanyId(id);
    }

    public List<Supplier> getSuppliers() throws Exception {
        return this.supplierRepository.findAll();
    }

    public ResponseEntity<String> addSupplier(Supplier supplier) {
        this.supplierRepository.save(supplier);
        return new ResponseEntity<>("votre fournisseur a été bien ajouter", HttpStatus.OK);
    }

    public ResponseEntity<String> updateSuplier(Supplier supplier) {
        this.supplierRepository.save(supplier);
        return new ResponseEntity<>("votre fournisseur a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteSupplier(Long id) {
        this.supplierRepository.deleteById(id);
        return new ResponseEntity<>("votre fournisseur a été bien supprimer", HttpStatus.OK);
    }
}
