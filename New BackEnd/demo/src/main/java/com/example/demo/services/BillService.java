package com.example.demo.services;

import com.example.demo.models.Bill;
import com.example.demo.repositorys.BillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BillService {

    private final BillRepository billRepository;

    public Optional<Bill> getBillByConstructionId(Long id) throws Exception{
        return this.billRepository.findByConstructionId(id);
    }

    public ResponseEntity<String> addBill(Bill bill){
        this.billRepository.save(bill);
        return new ResponseEntity<>("Votre facture a été bien ajouter", HttpStatus.OK);
    }

    public List<Bill> getBills() throws Exception{
        return this.billRepository.findAll();
    }
}
