package com.example.demo.services;


import com.example.demo.models.Meter;
import com.example.demo.repositorys.MeterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MeterService {

    private final MeterRepository meterRepository;

    public List<Meter> getMetersByCompany(Long id){
        return this.meterRepository.findMeterByCompanyId(id);
    }

    public List<Meter> getMeters() throws Exception {
        return this.meterRepository.findAll();
    }

    public ResponseEntity<String> addMeter(Meter meter) {
        this.meterRepository.save(meter);
        return new ResponseEntity<>("Votre compteur a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateMeter(Meter meter) {
        this.meterRepository.save(meter);
        return new ResponseEntity<>("Votre compteur a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteMeterById(Long id) {
        this.meterRepository.deleteById(id);
        return new ResponseEntity<>("Votre compteur( " + id + " )a été bien enregistrer", HttpStatus.OK);
    }
}
