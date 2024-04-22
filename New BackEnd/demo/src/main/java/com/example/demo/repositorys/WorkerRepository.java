package com.example.demo.repositorys;

import com.example.demo.models.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WorkerRepository extends JpaRepository<Worker, Long> {

    @Query("SELECT w FROM Worker w WHERE w.email LIKE :email")
    Optional<Worker> findByEmail(@Param("email") String email);

    @Query("SELECT w FROM Worker w WHERE w.company.id = :companyId")
    List<Worker> findWorkersByCompanyId(@Param("companyId") Long companyId);
}
