package com.example.microserviceuniversite.Controller;


import com.example.microserviceuniversite.Entity.Universite;
import com.example.microserviceuniversite.Service.UniversiteserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class UniversiteController {
    UniversiteserviceImpl universiteService;
    @PostMapping("/adduniversite")
    Universite addUniversite(@RequestBody com.example.microserviceuniversite.Entity.Universite  universite) {
        return universiteService.addUniversite(universite);
    }

    @GetMapping("/universite/{id}")
    Universite retrieveUniversite(@PathVariable Long id) {
        return universiteService.getUniversite(id);
    }

    @GetMapping("/universites")
    List<Universite> retrieveUniversites(){
        return universiteService.getAllUniversites();
    }

    @DeleteMapping("/deleteuniversite/{id}")

    void deleteUniversite(@PathVariable Long id){
        universiteService.deleteUniversite(id);
    }

    @PutMapping("/updateuniversite/{id}")
    Universite updateUniversite(@RequestBody Universite universite){
        return universiteService.updateUniversite(universite);
    }

}
