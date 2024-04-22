package com.example.demo.controllers;


import com.example.demo.models.SystemFixing;
import com.example.demo.services.SystemFixingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("systemFixing")
@RequiredArgsConstructor
public class SystemFixingController {

    private final SystemFixingService systemFixingService;

    @GetMapping("get/company/{id}")
    public List<SystemFixing> getSystemFixingsByCompany(@PathVariable Long id) {
        return this.systemFixingService.getSystemFixingsByCompany(id);
    }

    @GetMapping("get")
    public List<SystemFixing> getSystemFixings() throws Exception {
        return this.systemFixingService.getSystemFixings();
    }

    @PostMapping("add")
    public ResponseEntity<String> ajouter_systemeFixation(@RequestBody SystemFixing systemFixing) {
        return this.systemFixingService.addSystemFixing(systemFixing);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateSystemFixing(@RequestBody SystemFixing systemFixing) {
        return this.systemFixingService.updateSystemFixing(systemFixing);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteSystemFixing(@PathVariable Long id) {
        return this.systemFixingService.deleteSystemFixing(id);
    }

}
