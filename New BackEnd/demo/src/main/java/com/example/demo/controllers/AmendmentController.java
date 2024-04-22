package com.example.demo.controllers;


import com.example.demo.models.Amendment;
import com.example.demo.services.AmendmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("amendment")
@RequiredArgsConstructor
public class AmendmentController {

    private final AmendmentService amendmentService;

    @PostMapping("add")
    public ResponseEntity<String> addAmendment(@RequestBody Amendment amendment){
        return this.amendmentService.addAmendment(amendment);
    }

    @GetMapping("get/construction/{id}")
    public List<Amendment> getAmendmentsByConstructionId(@PathVariable Long id){
        return this.amendmentService.getAmendmentsByConstructionId(id);
    }

}
