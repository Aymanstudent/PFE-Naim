package com.example.demo.repositorys;

import com.example.demo.models.Cable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CableRepository extends JpaRepository<Cable, Long> {

    @Query("SELECT c FROM Cable c WHERE c.company.id = :companyId")
    List<Cable> findCableByCompanyId(@Param("companyId") Long companyId);
}
