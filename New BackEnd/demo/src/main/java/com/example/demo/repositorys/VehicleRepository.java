package com.example.demo.repositorys;


import com.example.demo.models.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicule, Long> {
}
