package com.example.demo.repositorys;

import com.example.demo.models.DevisRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DevisRequestRepository extends JpaRepository<DevisRequest, Long> {

    @Query("SELECT dr FROM DevisRequest dr WHERE dr.company.id = :companyId")
    List<DevisRequest> findDevisRequestByCompanyId(@Param("companyId") Long companyId);

}
