package com.example.demo.controllers;


import com.example.demo.models.SolarPanel;
import com.example.demo.services.SolarPanelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("solarPanel")
@RequiredArgsConstructor
public class SolarPanelController {

    private final SolarPanelService solarPanelService;

    @GetMapping("get/company/{id}")
    public List<SolarPanel> getSolarPanelsBYCompany(@PathVariable Long id) {
        return this.solarPanelService.getSolarPanelsByCompany(id);
    }

    @GetMapping("get/solarPanel/{id}")
    public Optional<SolarPanel> getSolarPanelById(@PathVariable Long id) {
        return this.solarPanelService.getSolarPanelById(id);
    }

    @GetMapping("get")
    public List<SolarPanel> getSolarPanels() throws Exception {
        return this.solarPanelService.getSolarPanels();
    }

    @PostMapping("add")
    public ResponseEntity<String> addSolarPanel(@RequestBody SolarPanel solarPanel) {
        return this.solarPanelService.addSolarPanel(solarPanel);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateSolarPanel(@RequestBody SolarPanel solarPanel) {
        return this.solarPanelService.updateSolarPanel(solarPanel);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteSolarPanelById(@PathVariable Long id) {
        return this.solarPanelService.deleteSolarPanelById(id);
    }

    @GetMapping("get/count")
    public List<Object> countSolarPanelByModel() throws Exception {
        return this.solarPanelService.countSolarPanelByModel();
    }


}
