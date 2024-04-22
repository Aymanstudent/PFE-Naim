package com.example.demo.services;


import com.example.demo.models.Cable;
import com.example.demo.repositorys.CableRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CableService {

    private final CableRepository cableRepository;

    public List<Cable> getCablesByCompany(Long id) {
        return this.cableRepository.findCableByCompanyId(id);
    }

    public List<Cable> getCables() throws Exception{
        return this.cableRepository.findAll();
    }
    public ResponseEntity<String> addCable(Cable cable){
        this.cableRepository.save(cable);
        return new ResponseEntity<>("Votre cable a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> updateCable(Cable cable){
        this.cableRepository.save(cable);
        return new ResponseEntity<>("Votre cable a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> deleteCable(Long id){
        this.cableRepository.deleteById(id);
        return new ResponseEntity<>("Votre cable (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

}
