package com.example.demo.repositorys;

import com.example.demo.models.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

    @Query("SELECT s FROM Supplier s WHERE s.company.id = :companyId")
    List<Supplier> findBySupplierCompanyId(@Param("companyId") Long companyId);
}
