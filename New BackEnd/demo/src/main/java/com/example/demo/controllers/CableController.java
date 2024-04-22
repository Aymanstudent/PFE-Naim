package com.example.demo.controllers;


import com.example.demo.models.Cable;
import com.example.demo.services.CableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cable")
@RequiredArgsConstructor
public class CableController {

    private final CableService cableService;


    @GetMapping("get/company/{id}")
    public List<Cable> getCablesByCompany(@PathVariable Long id) {
        return cableService.getCablesByCompany(id);
    }

    @GetMapping("get")
    public List<Cable> getCables() throws Exception {
        return this.cableService.getCables();
    }

    @PostMapping("add")
    public ResponseEntity<String> addCable(@RequestBody Cable cable) {
        return this.cableService.addCable(cable);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateCable(@RequestBody Cable cable) {
        return this.cableService.updateCable(cable);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteCable(@PathVariable Long id) {
        return this.cableService.deleteCable(id);
    }
}
