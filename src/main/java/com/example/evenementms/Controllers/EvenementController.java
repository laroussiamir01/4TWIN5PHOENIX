package com.example.evenementms.Controllers;

import com.example.evenementms.Entity.Evenement;
import com.example.evenementms.Service.EvenementServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/evenements")
//@CrossOrigin("*")
public class EvenementController {
    EvenementServiceImpl evenementservice;

    @GetMapping("/{id}")
    Evenement retrieveEvenement(@PathVariable Long id) {
        return evenementservice.getEvenement(id);
    }

    @PostMapping()
    Evenement addEvenement(@RequestBody Evenement evenement) {
        return evenementservice.addEvenement(evenement);
    }
    @GetMapping()
    List<Evenement> retrieveEvenements(){
        return evenementservice.getAllEvenements();
    }

    @GetMapping("/evenementBefore/{endDate}")
    public List<Evenement> findByDateFinBefore(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return evenementservice.findByDateFinBefore(endDate);
    }
    @GetMapping("/countEvenementBefore/{endDate}")
    public long countByDateFinBefore(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return evenementservice.countByDateFinBefore(endDate);
    }
    @GetMapping("/evenementParTitre/{titre}")
    public Evenement getEvenementByTitre(@PathVariable String titre) {
        return evenementservice.getEvenementByTitre(titre);
    }
    @DeleteMapping("/{id}")
    void deleteEvenement(@PathVariable Long id){
        evenementservice.deleteEvenement(id);
    }

    @PutMapping("/{id}")
    public Evenement updateEvenement(@PathVariable("id") Long id, @RequestBody Evenement evenement) {
        evenement.setIdEvenement(id); // Définir l'ID de l'étudiant à partir du chemin d'accès
        return evenementservice.updateEvenement(evenement);
    }

}
