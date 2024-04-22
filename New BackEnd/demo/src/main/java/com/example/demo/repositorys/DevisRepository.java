package com.example.demo.repositorys;

import com.example.demo.models.Devis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DevisRepository extends JpaRepository<Devis, Long> {

    @Query("SELECT d FROM Devis d WHERE d.company.id = :companyId")
    List<Devis> findByCompanyId(@Param("companyId") Long companyId);

}
