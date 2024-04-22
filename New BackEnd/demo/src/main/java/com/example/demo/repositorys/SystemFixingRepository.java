package com.example.demo.repositorys;

import com.example.demo.models.SystemFixing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SystemFixingRepository extends JpaRepository<SystemFixing, Long> {

    @Query("SELECT sf FROM SystemFixing sf WHERE sf.company.id = :companyId")
    List<SystemFixing> findSystemFixingByCompanyId(@Param("companyId") Long companyId);
}
