package com.example.demo.controllers;


import com.example.demo.models.Devis;
import com.example.demo.services.DevisService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("devis")
@RestController
@RequiredArgsConstructor
public class DevisController {

    private final DevisService devisService;

    @GetMapping("get/company/{id}")
    public List<Devis> getDevisByCompany(@PathVariable long id) {
        return this.devisService.getDevisByCompany(id);
    }

    @GetMapping("get")
    public List<Devis> getDevis() throws Exception {
        return this.devisService.getDevis();
    }

    @GetMapping("get/{id}")
    public Optional<Devis> getDevisById(@PathVariable Long id) throws Exception {
        return this.devisService.getDevisById(id);
    }

    @PostMapping("add")
    public ResponseEntity<String> addDevis(@RequestBody Devis devis) {
        return this.devisService.addDevis(devis);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateDevis(@RequestBody Devis devis) {
        return this.devisService.updateDevis(devis);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteDevis(@PathVariable Long id) {
        return this.devisService.deleteDevis(id);
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> supprimer_tout() {
        return this.devisService.deleteDevis();
    }

}
