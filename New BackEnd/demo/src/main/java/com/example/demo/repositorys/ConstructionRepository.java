package com.example.demo.repositorys;

import com.example.demo.models.Construction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ConstructionRepository extends JpaRepository<Construction,Long> {

    @Query("SELECT c FROM Construction c WHERE c.company.id = :companyId")
    List<Construction> findConstructionsByCompanyId(@Param("companyId") Long companyId);

}
