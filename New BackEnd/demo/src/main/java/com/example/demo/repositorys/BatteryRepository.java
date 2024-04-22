package com.example.demo.repositorys;

import com.example.demo.models.Battery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BatteryRepository extends JpaRepository<Battery, Long> {

    @Query("SELECT b FROM Battery b WHERE b.company.id = :companyId")
    List<Battery> findBatteriesByCompanyId(@Param("companyId") Long companyId);
}
