package com.example.demo.services;


import com.example.demo.models.Spot;
import com.example.demo.repositorys.SpotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpotService {

    private final SpotRepository spotRepository;

    public List<Spot> getSpots() throws Exception {
        return this.spotRepository.findAll();
    }
}
