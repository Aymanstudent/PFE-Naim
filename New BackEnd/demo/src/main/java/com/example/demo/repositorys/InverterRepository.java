package com.example.demo.repositorys;

import com.example.demo.models.Inverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InverterRepository extends JpaRepository<Inverter, Long> {

    @Query("SELECT i FROM Inverter i WHERE i.company.id = :companyId")
    List<Inverter> findInverterByCompanyId(@Param("companyId") Long companyId);

}
