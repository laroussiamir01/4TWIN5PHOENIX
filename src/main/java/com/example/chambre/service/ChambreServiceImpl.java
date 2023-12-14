package com.example.chambre.service;

import com.example.chambre.entity.Chambre;
import com.example.chambre.repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ChambreServiceImpl implements IChambreService{
    @Autowired
    ChambreRepository chambreRepository;
    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }

    @Override
    public Chambre getChambre(long idChambre) {
        return chambreRepository.findById(idChambre).orElse(null);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return chambreRepository.findAll();
    }

    @Override
    public void deleteChambre(long idChambre) {
        chambreRepository.deleteById(idChambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        Chambre chambre1= chambreRepository.findById(chambre.getIdChambre()).orElseThrow(() -> new EntityNotFoundException("No Chambre with id " + chambre.getIdChambre() + " was found!"));
        if (chambre1!=null){
            chambreRepository.save(chambre);}
        return chambre1;
    }
}
