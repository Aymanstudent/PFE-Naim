package com.example.demo.controllers;


import com.example.demo.models.Meter;
import com.example.demo.services.MeterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("meter")
@RequiredArgsConstructor
public class MeterController {

    private final MeterService meterService;

    @GetMapping("get/company/{id}")
    public List<Meter> getMetersByCompany(@PathVariable Long id) {
        return this.meterService.getMetersByCompany(id);
    }

    @GetMapping("get")
    public List<Meter> getMeters() throws Exception {
        return this.meterService.getMeters();
    }

    @PostMapping("add")
    public ResponseEntity<String> addMeter(@RequestBody Meter meter) {
        return this.meterService.addMeter(meter);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateMeter(@RequestBody Meter meter) {
        return this.meterService.updateMeter(meter);
    }

    @PostMapping("delete/{id}")
    public ResponseEntity<String> deleteMeterById(@RequestBody Long id) {
        return this.meterService.deleteMeterById(id);
    }

}
