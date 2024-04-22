package com.example.demo.services;


import com.example.demo.models.Battery;
import com.example.demo.repositorys.BatteryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BatteryService {

    private final BatteryRepository batteryRepository;

    public List<Battery> getBatteriesByCompany(Long id) {
        return this.batteryRepository.findBatteriesByCompanyId(id);
    }

    public List<Battery> getBatteries() throws Exception {
        return this.batteryRepository.findAll();
    }

    public ResponseEntity<String> addBattery(Battery battery) {
        this.batteryRepository.save(battery);
        return new ResponseEntity<>("Votre batterie a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateBattery(Battery battery) {
        this.batteryRepository.save(battery);
        return new ResponseEntity<>("Votre batterie a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteBattery(Long id) {
        this.batteryRepository.deleteById(id);
        return new ResponseEntity<>("Votre batterie(" + id + ") a été bien enregistrer", HttpStatus.OK);
    }
}
