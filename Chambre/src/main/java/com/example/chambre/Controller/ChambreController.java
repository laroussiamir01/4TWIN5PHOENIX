package com.example.chambre.Controller;

import com.example.chambre.entity.Chambre;
import com.example.chambre.service.ChambreServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/chambres")
@CrossOrigin(origins = "http://localhost:4200")
public class ChambreController {
    private final ChambreServiceImpl chambreService;

    @PostMapping()
    Chambre addChambre(@RequestBody Chambre chambre) {
        return chambreService.addChambre(chambre);
    }

    @GetMapping("/{id}")
    Chambre retrieveChambre(@PathVariable Long id) {
        return chambreService.getChambre(id);
    }

    @GetMapping()
    List<Chambre> retrieveChambres() {
        return chambreService.getAllChambres();
    }

    @DeleteMapping("/{id}")
    void deleteChambre(@PathVariable Long id) {
        chambreService.deleteChambre(id);
    }

    @PutMapping("/{id}")
    public Chambre updateChambre(@PathVariable("id") Long id, @RequestBody Chambre chambre) {
        chambre.setIdChambre(id);
        return chambreService.updateChambre(chambre);
    }
}
