package com.example.microserviceuniversite.Service;

import com.example.microserviceuniversite.Entity.Universite;

import com.example.microserviceuniversite.Repository.UniversiteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UniversiteserviceImpl  {
    UniversiteRepository universiteRepository;


    public Universite addUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    public Universite getUniversite(long idUniversite) {
        return universiteRepository.findById(idUniversite).orElse(null);
    }

    public List<Universite> getAllUniversites() {
        return universiteRepository.findAll();
    }


    public void deleteUniversite(long idUniversite) {
        universiteRepository.deleteById(idUniversite);
    }

    public Universite updateUniversite(long idUniversite, Universite universite) {
        if (universiteRepository.findById(idUniversite).isPresent()) {
            Universite universite1 = universiteRepository.findById(idUniversite).get();
            universite1.setNomUniversite(universite.getNomUniversite());
            universite1.setAdresse(universite.getAdresse());
            return universiteRepository.save(universite);
        } else
            return null;

    }

}
