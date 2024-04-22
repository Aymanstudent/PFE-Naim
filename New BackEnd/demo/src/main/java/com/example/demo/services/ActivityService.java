package com.example.demo.services;


import com.example.demo.models.Activity;
import com.example.demo.repositorys.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;

    public List<Activity> getActivitiesByCompany(Long companyId){
        return this.activityRepository.findActivitiesByCompanyId(companyId);
    }

    public List<Activity> getActivities() throws Exception {
        return this.activityRepository.findAll();
    }

    public List<Activity> getActivitiesByWorkerId(Long id) throws Exception {
        return this.activityRepository.findActivitiesByWorkerId(id);
    }

    public ResponseEntity<String> addActivity(Activity activity) {
        this.activityRepository.save(activity);
        return new ResponseEntity<>("Votre planif a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> updateActivity(Activity activity) {
        this.activityRepository.save(activity);
        return new ResponseEntity<>("Votre planif a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteActivities() {
        this.activityRepository.deleteAll();
        return new ResponseEntity<>("Tout les planifs ons été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteActivity(Long id) {
        Optional<Activity> evenementOptional = activityRepository.findById(id);
        if (evenementOptional.isPresent()) {
            Activity evenement = evenementOptional.get();
            evenement.getSpots().clear();
            evenement.getWorkers().clear();
            activityRepository.deleteById(id);
        }
        return new ResponseEntity<>("Votre planif a été bien supprimer", HttpStatus.OK);
    }
}
