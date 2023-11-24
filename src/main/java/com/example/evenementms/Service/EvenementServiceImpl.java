package com.example.evenementms.Service;

import com.example.evenementms.Entity.Evenement;
import com.example.evenementms.Repository.EvenementRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class EvenementServiceImpl implements IEvenementService{
    EvenementRepository evenementRepository;
    @Override
    public Evenement addEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    @Override
    public Evenement getEvenement(long idEvenement) {
        return evenementRepository.findById(idEvenement).orElse(null);
    }

    @Override
    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public void deleteEvenement(long idEvenement) {
        evenementRepository.deleteById(idEvenement);
    }

    @Override
    public Evenement updateEvenement(Evenement evenement) {
        Evenement evenement1= evenementRepository.findById(evenement.getIdEvenement()).orElseThrow(() -> new EntityNotFoundException("No Bloc with id " + evenement.getIdEvenement() + " was found!"));
        if (evenement1!=null){
            evenementRepository.save(evenement);}
        return evenement1;
    }

    @Override
    public List<Evenement> findByDateFinBefore(Date endDate) {
        return evenementRepository.findByDateFinBefore(endDate);

    }

    @Override
    public long countByDateFinBefore(Date endDate) {
        return evenementRepository.countByDateFinBefore(endDate);
    }

    @Override
    public Evenement getEvenementByTitre(String titre) {
        return evenementRepository.findByTitre(titre);
    }

    @Override
    public void deleteExpiredEvents() {
return;
    }
}
