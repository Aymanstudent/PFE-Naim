package com.example.demo.controllers;


import com.example.demo.models.Bill;
import com.example.demo.services.BillService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("bill")
@RequiredArgsConstructor
public class BillController {

    private final BillService billService;

    @GetMapping("get/construction/{id}")
    public Optional<Bill> getBillByConstructionId(@PathVariable Long id) throws Exception{
        return this.billService.getBillByConstructionId(id);
    }

    @GetMapping("get")
    public List<Bill> getBills() throws Exception{
        return this.billService.getBills();
    }

    @PostMapping("add")
    public ResponseEntity<String> addBill(@RequestBody Bill bill){
        return this.billService.addBill(bill);
    }


}
