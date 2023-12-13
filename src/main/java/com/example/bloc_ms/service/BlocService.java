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
    public Bloc getBlocById(long idBloc) {
        // Implement logic to retrieve Bloc by ID from your data source
        // For example, you might use a repository or some other data access method
        // This is a placeholder and should be adapted based on your specific implementation
        return blocRepository.findById(idBloc).orElse(null);
    }
}
