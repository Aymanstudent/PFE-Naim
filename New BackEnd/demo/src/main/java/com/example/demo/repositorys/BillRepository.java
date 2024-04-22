package com.example.demo.repositorys;

import com.example.demo.models.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BillRepository extends JpaRepository<Bill, Long> {

    @Query("SELECT f FROM Bill f JOIN f.construction c WHERE c.id = :ConstructionId")
    Optional<Bill> findByConstructionId(@Param("ConstructionId") Long ConstructionId);
}
