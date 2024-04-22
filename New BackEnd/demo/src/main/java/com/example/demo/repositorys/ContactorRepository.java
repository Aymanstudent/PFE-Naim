package com.example.demo.repositorys;


import com.example.demo.models.Contactor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactorRepository extends JpaRepository<Contactor, Long> {

    Optional<Contactor> findByEmail(String email);
}
