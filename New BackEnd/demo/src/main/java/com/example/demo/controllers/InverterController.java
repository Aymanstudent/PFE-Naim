package com.example.demo.controllers;


import com.example.demo.models.Inverter;
import com.example.demo.services.InverterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inverter")
@RequiredArgsConstructor
public class InverterController {

    private final InverterService inverterService;

    @GetMapping("get/company/{id}")
    public List<Inverter> getInvertersByCompany(@PathVariable long id) {
        return this.inverterService.getInvertersByCompany(id);
    }

    @GetMapping("get")
    public List<Inverter> getInverters() throws Exception {
        return this.inverterService.getInverters();
    }

    @PostMapping("add")
    public ResponseEntity<String> addInverter(@RequestBody Inverter inverter) {
        return this.inverterService.addInverter(inverter);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateInverter(@RequestBody Inverter inverter) {
        return this.inverterService.updateInverter(inverter);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteInverterById(@PathVariable Long id) {
        return this.inverterService.deleteInverterById(id);
    }
}
