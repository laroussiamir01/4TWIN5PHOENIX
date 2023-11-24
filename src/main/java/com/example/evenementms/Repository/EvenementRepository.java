package com.example.evenementms.Repository;

import com.example.evenementms.Entity.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface EvenementRepository extends JpaRepository<Evenement,Long> {
    Evenement findByTitre(String titre);
    List<Evenement> findByDateFinBefore(Date endDate);
    //   boolean findByDateFinBefore(Date endDate);
    long countByDateFinBefore(Date endDate);
    @Modifying
    @Query("SELECT e FROM Evenement e WHERE e.dateFin < :currentDate")
    Evenement deleteExpiredEvents(@Param("currentDate") Date currentDate);
}
