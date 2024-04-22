package com.example.demo.controllers;


import com.example.demo.models.Activity;
import com.example.demo.services.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("activity")
@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;


    @GetMapping("get/company/{id}")
    public List<Activity> getActivitiesByCompany(@PathVariable long id) {
        return this.activityService.getActivitiesByCompany(id);
    }

    @GetMapping("get")
    public List<Activity> getActivities() throws Exception {
        return this.activityService.getActivities();
    }

    @GetMapping("get/{id}")
    public List<Activity> getActivitiesByWorkerId(@PathVariable Long id) throws Exception {
        return this.activityService.getActivitiesByWorkerId(id);
    }

    @PostMapping("add")
    public ResponseEntity<String> ajouter_jourTravailler(@RequestBody Activity activity) {
        return this.activityService.addActivity(activity);
    }

    @PutMapping("update")
    public ResponseEntity<String> modifier_EvenementChantier(@RequestBody Activity activity) {
        return this.activityService.updateActivity(activity);
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> deleteActivities() {
        return this.activityService.deleteActivities();
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Long id) {
        return this.activityService.deleteActivity(id);
    }
}
