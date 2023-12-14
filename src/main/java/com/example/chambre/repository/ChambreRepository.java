package com.example.chambre.repository;

import com.example.chambre.entity.Chambre;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChambreRepository extends JpaRepository<Chambre, Long> {
    @Query("select c from Chambre c where c.nomChambre like :name")
    public Page<Chambre> chambreByNom(@Param("name") String n, Pageable pageable);
}
