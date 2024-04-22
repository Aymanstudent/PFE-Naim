package com.example.demo.services;


import com.example.demo.models.Amendment;
import com.example.demo.repositorys.AmendmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AmendmentService {

    private final AmendmentRepository amendmentRepository;

    public ResponseEntity<String> addAmendment(Amendment avenant){
        this.amendmentRepository.save(avenant);
        return new ResponseEntity<>("votre avenant a été bien enregistrer", HttpStatus.OK);
    }

    public List<Amendment> getAmendmentsByConstructionId(Long id) {
        return this.amendmentRepository.getAmendmentsByConstructionId(id);
    }
}
