package com.example.evenementms.Service;

import com.example.evenementms.Entity.Evenement;

import java.util.Date;
import java.util.List;

public interface IEvenementService {
    Evenement addEvenement(Evenement evenement);
    Evenement getEvenement(long idEvenement);
    List<Evenement> getAllEvenements();
    void deleteEvenement(long idEvenement);
    Evenement updateEvenement(Evenement evenement);
    List<Evenement> findByDateFinBefore(Date endDate);
    long countByDateFinBefore(Date endDate);
    Evenement getEvenementByTitre(String titre);
    public void deleteExpiredEvents();
}
