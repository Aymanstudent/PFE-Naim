package com.example.demo.services;


import com.example.demo.models.Vehicule;
import com.example.demo.repositorys.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public List<Vehicule> getVehicles() throws Exception{
        return this.vehicleRepository.findAll();
    }
}
