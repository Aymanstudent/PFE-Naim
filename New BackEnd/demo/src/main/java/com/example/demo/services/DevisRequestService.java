package com.example.demo.services;


import com.example.demo.models.DevisRequest;
import com.example.demo.repositorys.DevisRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DevisRequestService {

    private final DevisRequestRepository devisRequestRepository;

    public List<DevisRequest> getDevisRequestsByCompany(Long id) {
        return this.devisRequestRepository.findDevisRequestByCompanyId(id);
    }

    public List<DevisRequest> getDevisRequests() throws Exception {
        return this.devisRequestRepository.findAll();
    }

    public Optional<DevisRequest> getDevisRequestById(Long id) throws Exception {
        return this.devisRequestRepository.findById(id);
    }

    public ResponseEntity<String> deleteDevisRequests() {
        this.devisRequestRepository.deleteAll();
        return new ResponseEntity<>("Tout les demande ont été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> addDevisRequest(DevisRequest devisRequest) {
        this.devisRequestRepository.save(devisRequest);
        return new ResponseEntity<>("Votre demande a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateDevisRequest(DevisRequest devisRequest) {
        this.devisRequestRepository.save(devisRequest);
        return new ResponseEntity<>("Votre demande a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteDevisRequestById(Long id) {
        this.devisRequestRepository.deleteById(id);
        return new ResponseEntity<>("Votre demande (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

}
