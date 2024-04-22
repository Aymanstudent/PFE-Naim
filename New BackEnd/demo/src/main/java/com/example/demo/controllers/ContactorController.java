package com.example.demo.controllers;


import com.example.demo.models.Contactor;
import com.example.demo.services.ContactorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("contactor")
@RequiredArgsConstructor
public class ContactorController {

    private final ContactorService contactorService;

    @GetMapping("get/one/by-email/{email}")
    public Optional<Contactor> getContactorByEmail(@PathVariable String email) {
        return this.contactorService.getContactorByEmail(email);
    }

    @GetMapping("get")
    public List<Contactor> getAllContactors() {
        return this.contactorService.getAllContactors();
    }

    @PostMapping("add")
    public ResponseEntity<String> addContactor(@RequestBody Contactor contactor) {
        return this.contactorService.addContactor(contactor);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateContactor(@RequestBody Contactor contactor) {
        return this.contactorService.updateContactor(contactor);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteContactor(@PathVariable Long id) {
        return this.contactorService.deleteContactor(id);
    }
}
