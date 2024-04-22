package com.example.demo.controllers;


import com.example.demo.models.Vehicule;
import com.example.demo.services.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("vehicle")
@RequiredArgsConstructor
public class VehicleController {

    private final VehicleService vehicleService;

    @GetMapping("get")
    public List<Vehicule> getVehicles() throws Exception{
        return this.vehicleService.getVehicles();
    }
}
