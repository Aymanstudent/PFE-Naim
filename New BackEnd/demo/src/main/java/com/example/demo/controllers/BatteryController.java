package com.example.demo.controllers;


import com.example.demo.models.Battery;
import com.example.demo.services.BatteryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("battery")
@RequiredArgsConstructor
public class BatteryController {

    private final BatteryService batteryService;

    @GetMapping("get/company/{id}")
    public List<Battery> getBatteriesByCompanyId(@PathVariable Long id) {
        return this.batteryService.getBatteriesByCompany(id);
    }

    @GetMapping("get")
    public List<Battery> getBatteries() throws Exception {
        return this.batteryService.getBatteries();
    }

    @PostMapping("add")
    public ResponseEntity<String> addBattery(@RequestBody Battery battery) {
        return this.batteryService.addBattery(battery);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateBattery(@RequestBody Battery battery) {
        return this.batteryService.updateBattery(battery);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBattery(@PathVariable Long id) {
        return this.batteryService.deleteBattery(id);
    }

}
