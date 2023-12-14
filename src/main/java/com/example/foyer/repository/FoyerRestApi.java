package com.example.foyer.repository;

import com.example.foyer.entity.Foyer;
import com.example.foyer.service.FoyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/foyers")
public class FoyerRestApi {
@Autowired
    private FoyerService foyerService;
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Foyer> createFoyer(@RequestBody Foyer foyer) {
        return new ResponseEntity<>(foyerService.addFoyer(foyer), HttpStatus.OK);
    }
    @GetMapping("/{idFoyer}")
    public ResponseEntity<Foyer> getFoyerById(@PathVariable(value = "idFoyer") long idFoyer) {
        Foyer foyer = foyerService.getFoyerByIdFoyer(idFoyer);
        if (foyer != null) {
            return new ResponseEntity<>(foyer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping
    public List<Foyer> getListFoyer() {
        return foyerService.gettAllFoyers();
    }
    @PutMapping(value = "/{idFoyer}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Foyer> updateFoyer(@PathVariable(value = "idFoyer") long idFoyer,
                                             @RequestBody Foyer foyer) {
        return new ResponseEntity<>(foyerService.updateFoyer(idFoyer, foyer),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "/{idFoyer}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteFoyer(@PathVariable(value = "idFoyer") long idFoyer) {
        return new ResponseEntity<>(foyerService.deleteFoyer(idFoyer), HttpStatus.OK);
    }

}
