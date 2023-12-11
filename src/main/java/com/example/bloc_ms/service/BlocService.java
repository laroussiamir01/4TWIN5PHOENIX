package com.example.bloc_ms.service;

import com.example.bloc_ms.entity.Bloc;
import com.example.bloc_ms.repository.BlocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlocService {
    @Autowired
    BlocRepository blocRepository;



    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }
    public List<Bloc> gettAllBlocs(){
        return blocRepository.findAll();
    }

    public Bloc updateBloc(long idBloc, Bloc newBloc) {
        if (blocRepository.findById(idBloc).isPresent()) {
            Bloc existingBloc = blocRepository.findById(idBloc).get();
            existingBloc.setNomBloc(newBloc.getNomBloc());
            existingBloc.setCapaciteBloc(newBloc.getCapaciteBloc());
            return blocRepository.save(existingBloc);
        } else
            return null;

    }
    public String deleteBloc(long idBloc) {
        if (blocRepository.findById(idBloc).isPresent()) {
            blocRepository.deleteById(idBloc);
            return "bloc supprimé";
        } else
            return "bloc non supprimé";
    }
}
