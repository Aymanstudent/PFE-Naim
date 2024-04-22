package com.example.demo.services;

import com.example.demo.models.SolarPanel;
import com.example.demo.repositorys.SolarPanelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SolarPanelService {

    private final SolarPanelRepository solarPanelRepository;

    public List<SolarPanel> getSolarPanelsByCompany(Long id) {
        return this.solarPanelRepository.findBySolarPanelCompanyId(id);
    }
    public Optional<SolarPanel> getSolarPanelById(Long id) {
        return this.solarPanelRepository.findById(id);
    }
    public List<SolarPanel> getSolarPanels() throws Exception {
        return this.solarPanelRepository.findAll();
    }

    public ResponseEntity<String> addSolarPanel(SolarPanel solarPanel) {
        this.solarPanelRepository.save(solarPanel);
        return new ResponseEntity<>("Votre panneaux solaire a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateSolarPanel(SolarPanel solarPanel) {
        this.solarPanelRepository.save(solarPanel);
        return new ResponseEntity<>("Votre panneaux solaire a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteSolarPanelById(Long id) {
        this.solarPanelRepository.deleteById(id);
        return new ResponseEntity<>("Votre panneaux solaire (" + id + ")a été bien supprimer", HttpStatus.OK);
    }

    public List<Object> countSolarPanelByModel() throws Exception {
        return this.solarPanelRepository.countDistinctByModel();
    }
}
