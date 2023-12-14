package com.example.foyer.service;

import com.example.foyer.entity.Foyer;
import com.example.foyer.repository.FoyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoyerService {
    @Autowired
    private FoyerRepository foyerRepository;

    public Foyer addFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }
    public List<Foyer> gettAllFoyers(){
        return foyerRepository.findAll();
    }

    public Foyer updateFoyer(long idFoyer, Foyer newFoyer) {
        if (foyerRepository.findById(idFoyer).isPresent()) {
            Foyer existingFoyer = foyerRepository.findById(idFoyer).get();
            existingFoyer.setNomFoyer(newFoyer.getNomFoyer());
            existingFoyer.setCapaciteFoyer(newFoyer.getCapaciteFoyer());
            return foyerRepository.save(existingFoyer);
        } else
            return null;

    }
    public String deleteFoyer(long idFoyer) {
        if (foyerRepository.findById(idFoyer).isPresent()) {
            foyerRepository.deleteById(idFoyer);
            return "foyer supprimé";
        } else
            return "foyer non supprimé";
    }
    public Foyer getFoyerByIdFoyer(long idFoyer){
        return foyerRepository.findById(idFoyer).orElse(null);
    }
}
