package com.example.microserviceuniversite.Service;


import com.example.microserviceuniversite.Entity.Universite;

import java.util.List;

public interface IUniversiteService {
    Universite addUniversite(Universite universite);
    Universite getUniversite(long idUniversite);
    List<Universite> getAllUniversites();
    void deleteUniversite(long idUniversite);
    Universite updateUniversite(Universite universite);
  /*  Universite affecterFoyerAUniversite(long idFoyer,long idUniversite);
    Universite affecterFoyerAUniversite1(long idFoyer,String nomUniversite);
    Universite affecterFoyerAUniversite2(long idFoyer,String adresse);
    public Universite desaffecterFoyerAUniversite (long idUniversite) ;*/
}
