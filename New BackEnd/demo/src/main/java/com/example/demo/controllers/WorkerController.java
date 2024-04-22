package com.example.demo.controllers;


import com.example.demo.models.Worker;
import com.example.demo.services.WorkerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("worker")
@RequiredArgsConstructor
public class WorkerController {

    private final WorkerService workerService;

    @GetMapping("get/company/{id}")
    public List<Worker> getWorkersByCompany(@PathVariable Long id){
        return workerService.getWorkersByCompany(id);
    }

    @GetMapping("get")
    public List<Worker> getWorkers() throws Exception{
        return workerService.getWorkers();
    }

    @GetMapping("get/one/{email}")
    public Optional<Worker> getWorkerByEmail(@PathVariable String email){
        return this.workerService.getWorkerByEmail(email);
    }
    @PostMapping("add")
    public ResponseEntity<String> addWorker(@RequestBody Worker ouvrier){
        return this.workerService.addWorker(ouvrier);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateWorker(@RequestBody Worker ouvrier){
        return this.workerService.updateWorker(ouvrier);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteWorker(@PathVariable Long id){
        return this.workerService.deleteWorker(id);
    }
}
