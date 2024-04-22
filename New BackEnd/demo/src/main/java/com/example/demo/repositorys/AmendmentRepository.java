package com.example.demo.repositorys;

import com.example.demo.models.Amendment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AmendmentRepository extends JpaRepository<Amendment, Long> {

    @Query("SELECT A FROM Amendment A  WHERE A.construction.id =:constructionId")
    List<Amendment> getAmendmentsByConstructionId(@Param("constructionId") Long constructionId);
}
