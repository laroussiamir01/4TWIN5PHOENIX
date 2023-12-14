package com.example.chambre.service;

import com.example.chambre.entity.Chambre;

import java.util.List;

public interface IChambreService {
    Chambre addChambre(Chambre chambre);
    Chambre getChambre(long idChambre);
    List<Chambre> getAllChambres();
    void deleteChambre(long idChambre);
    Chambre updateChambre(Chambre chambre);
}
