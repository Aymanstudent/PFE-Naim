package com.example.demo.services;


import com.example.demo.models.ContactorRequest;
import com.example.demo.repositorys.ContactorRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactorRequestService {

    private final ContactorRequestRepository contactorRequestRepository;

    public List<ContactorRequest> getContactorRequests() {
        return this.contactorRequestRepository.findAll();
    }

    public ResponseEntity<ContactorRequest> addContactorRequest(ContactorRequest contactorRequest) {
        this.contactorRequestRepository.save(contactorRequest);
        return ResponseEntity.ok(contactorRequest);
    }

    public ResponseEntity<String> deleteContactorRequest(Long id) {
        this.contactorRequestRepository.deleteById(id);
        return ResponseEntity.ok("Votre demande a été supprimer");
    }
}
