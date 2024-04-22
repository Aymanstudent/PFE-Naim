package com.example.demo.services;


import com.example.demo.models.SystemFixing;
import com.example.demo.repositorys.SystemFixingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SystemFixingService {

    private final SystemFixingRepository systemFixingRepository;

    public List<SystemFixing> getSystemFixingsByCompany(Long id) {
        return this.systemFixingRepository.findSystemFixingByCompanyId(id);
    }

    public List<SystemFixing> getSystemFixings() throws Exception {
        return this.systemFixingRepository.findAll();
    }

    public ResponseEntity<String> addSystemFixing(SystemFixing systemFixing) {
        this.systemFixingRepository.save(systemFixing);
        return new ResponseEntity<>("Votre systeme de fixation a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateSystemFixing(SystemFixing systemFixing) {
        this.systemFixingRepository.save(systemFixing);
        return new ResponseEntity<>("Votre systeme de fixation a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteSystemFixing(Long id) {
        this.systemFixingRepository.deleteById(id);
        return new ResponseEntity<>("Votre systeme de fixation (" + id + ") a été bien supprimer", HttpStatus.OK);
    }
}
