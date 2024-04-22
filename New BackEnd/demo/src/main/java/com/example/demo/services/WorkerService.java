package com.example.demo.services;


import com.example.demo.models.Worker;
import com.example.demo.repositorys.WorkerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WorkerService {

    private final WorkerRepository workerRepository;

    public List<Worker> getWorkersByCompany(Long id) {
        return this.workerRepository.findWorkersByCompanyId(id);
    }

    public List<Worker> getWorkers() throws Exception {
        return this.workerRepository.findAll();
    }

    public Optional<Worker> getWorkerByEmail(String email) {
        return this.workerRepository.findByEmail(email);
    }

    public ResponseEntity<String> addWorker(Worker worker) {
        this.workerRepository.save(worker);
        return new ResponseEntity<>("Votre ouvrier a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateWorker(Worker worker) {
        this.workerRepository.save(worker);
        return new ResponseEntity<>("Votre ouvrier a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteWorker(Long id) {
        this.workerRepository.deleteById(id);
        return new ResponseEntity<>("Votre ouvrier a été bien supprimer", HttpStatus.OK);
    }


}
