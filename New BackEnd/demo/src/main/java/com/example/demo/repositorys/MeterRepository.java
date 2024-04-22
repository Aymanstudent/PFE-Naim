package com.example.demo.repositorys;

import com.example.demo.models.Meter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MeterRepository extends JpaRepository<Meter, Long> {

    @Query("SELECT m FROM Meter m WHERE m.company.id = :companyId")
    List<Meter> findMeterByCompanyId(@Param("companyId") Long companyId);
}
