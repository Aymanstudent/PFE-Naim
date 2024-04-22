package com.example.demo.services;


import com.example.demo.models.Inverter;
import com.example.demo.repositorys.InverterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InverterService {

    private final InverterRepository inverterRepository;

    public List<Inverter> getInvertersByCompany(Long id) {
        return this.inverterRepository.findInverterByCompanyId(id);
    }

    public List<Inverter> getInverters() throws Exception {
        return this.inverterRepository.findAll();
    }

    public ResponseEntity<String> addInverter(Inverter inverter) {
        this.inverterRepository.save(inverter);
        return new ResponseEntity<>("Votre onduleur a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateInverter(Inverter inverter) {
        this.inverterRepository.save(inverter);
        return new ResponseEntity<>("Votre onduleur a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteInverterById(Long id) {
        this.inverterRepository.deleteById(id);
        return new ResponseEntity<>("Votre onduleur (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

}
