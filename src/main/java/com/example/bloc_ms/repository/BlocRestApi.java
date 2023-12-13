package com.example.bloc_ms.repository;

import com.example.bloc_ms.entity.Bloc;
import com.example.bloc_ms.service.BlocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Bloc")
public class BlocRestApi {
    @Autowired
    private BlocService blocService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Bloc> createBloc(@RequestBody Bloc bloc) {
        return new ResponseEntity<>(blocService.addBloc(bloc), HttpStatus.OK);
    }

    @RequestMapping
    public List<Bloc> getListBloc(){
        return blocService.gettAllBlocs();
    }

    @PutMapping(value = "/{idBloc}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Bloc> updateBloc(@PathVariable(value = "idBloc") long idBloc,
                                           @RequestBody Bloc bloc){
        return new ResponseEntity<>(blocService.updateBloc(idBloc, bloc),
                HttpStatus.OK);
    }
    @GetMapping(value = "/{idBloc}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Bloc> getBlocById(@PathVariable(value = "idBloc") long idBloc) {
        Bloc bloc = blocService.getBlocById(idBloc);

        if (bloc != null) {
            return new ResponseEntity<>(bloc, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping(value = "/{idBloc}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteBloc(@PathVariable(value = "idBloc") long idBloc) {
        return new ResponseEntity<>(blocService.deleteBloc(idBloc), HttpStatus.OK);
    }
}
