package com.example.demo.controllers;


import com.example.demo.models.ContactorRequest;
import com.example.demo.services.ContactorRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("contactorRequest")
@RequiredArgsConstructor
public class ContactorRequestController {

    private final ContactorRequestService contactorRequestService;

    @GetMapping("get")
    public List<ContactorRequest> getContactorRequests() {
        return this.contactorRequestService.getContactorRequests();
    }

    @PostMapping("add")
    public ResponseEntity<ContactorRequest> addContactorRequest(@RequestBody ContactorRequest contactorRequest) {
        return this.contactorRequestService.addContactorRequest(contactorRequest);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteContactorRequest(@PathVariable Long id) {
        return this.contactorRequestService.deleteContactorRequest(id);
    }
}
