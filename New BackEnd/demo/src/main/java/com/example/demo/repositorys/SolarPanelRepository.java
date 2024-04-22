package com.example.demo.repositorys;

import com.example.demo.models.SolarPanel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SolarPanelRepository extends JpaRepository<SolarPanel, Long> {

    @Query("SELECT p.model, count(p) AS count FROM SolarPanel p GROUP BY p.model")
    List<Object> countDistinctByModel();

    @Query("SELECT sp FROM SolarPanel sp WHERE sp.company.id = :companyId")
    List<SolarPanel> findBySolarPanelCompanyId(@Param("companyId") Long companyId);
}
