package com.example.demo.services;


import com.example.demo.models.Contactor;
import com.example.demo.repositorys.ContactorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContactorService {

    private final ContactorRepository contactorRepository;


    public List<Contactor> getAllContactors() {
        return contactorRepository.findAll();
    }

    public Optional<Contactor> getContactorByEmail(String email) {
        return this.contactorRepository.findByEmail(email);
    }

    public ResponseEntity<String> addContactor(Contactor contactor) {
        this.contactorRepository.save(contactor);
        return new ResponseEntity<>("votre entrepreneur a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateContactor(Contactor contactor) {
        this.contactorRepository.save(contactor);
        return new ResponseEntity<>("votre entrepreneur a été bein modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteContactor(Long id) {
        this.contactorRepository.deleteById(id);
        return new ResponseEntity<>("votre entrepreneur a été bien supprimer", HttpStatus.OK);
    }
}
