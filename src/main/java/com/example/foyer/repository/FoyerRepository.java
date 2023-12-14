package com.example.foyer.repository;

import com.example.foyer.entity.Foyer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FoyerRepository extends JpaRepository<Foyer,Long> {
    @Query("select f from Foyer f where f.nomFoyer like :name")
    public Page<Foyer> foyerByNom(@Param("name") String n, Pageable pageable);
}
