package com.example.demo.services;

import com.example.demo.models.Devis;
import com.example.demo.repositorys.DevisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DevisService {

    private final DevisRepository devisRepository;


    public List<Devis> getDevisByCompany(Long id){
        return devisRepository.findByCompanyId(id);
    }

    public List<Devis> getDevis() throws Exception {
        return devisRepository.findAll();
    }

    public Optional<Devis> getDevisById(Long id) {
        return this.devisRepository.findById(id);
    }

    public ResponseEntity<String> addDevis(Devis devis) {
        this.devisRepository.save(devis);
        return new ResponseEntity<>("Votre devis a été bien ajouter", HttpStatus.OK);
    }

    public ResponseEntity<String> updateDevis(Devis devis) {
        this.devisRepository.save(devis);
        return new ResponseEntity<>("Votre devis a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteDevis(Long id) {
        this.devisRepository.deleteById(id);
        return new ResponseEntity<>("Votre devis (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteDevis() {
        this.devisRepository.deleteAll();
        return new ResponseEntity<>("Tout les devis ont été bien supprimer", HttpStatus.OK);
    }
}
