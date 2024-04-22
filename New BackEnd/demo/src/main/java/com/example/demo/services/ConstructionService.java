package com.example.demo.services;


import com.example.demo.models.Construction;
import com.example.demo.repositorys.ConstructionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConstructionService {

    private final ConstructionRepository constructionRepository;

    public List<Construction>getConstructionsByCompany(Long id) {
        return this.constructionRepository.findConstructionsByCompanyId(id);
    }

    public Construction saveConstruction(Construction construction){
        return this.constructionRepository.save(construction);
    }

    public ResponseEntity<String> updateConstruction(Construction construction){
        this.constructionRepository.save(construction);
        return new ResponseEntity<>("Votre chantier a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteConstruction(Long id){
        this.constructionRepository.deleteById(id);
        return new ResponseEntity<>("Votre chantier a été bien supprimer", HttpStatus.OK);
    }

    public List<Construction> getConstructions() throws Exception{
        return this.constructionRepository.findAll();
    }
}
