package com.example.reservationmicroservice.service;

import com.example.reservationmicroservice.entity.Reservation;
import com.example.reservationmicroservice.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation addReservation(Reservation Reservation) {
        return reservationRepository.save(Reservation);
    }
    public List<Reservation> gettAllReservations(){
        return reservationRepository.findAll();
    }

    public Reservation updateReservation(long idReservation, Reservation newReservation) {
        if (reservationRepository.findById(idReservation).isPresent()) {
            Reservation existingReservation = reservationRepository.findById(idReservation).get();
            existingReservation.setAnneeUniversite(newReservation.getAnneeUniversite());
            existingReservation.setEstValide(newReservation.isEstValide());
            return reservationRepository.save(existingReservation);
        } else
            return null;

    }
    public String deleteReservation(long idReservation) {
        if (reservationRepository.findById(idReservation).isPresent()) {
            reservationRepository.deleteById(idReservation);
            return "Reservation supprimé";
        } else
            return "Reservation non supprimé";
    }
    public Reservation getReservationByIdReservation(long idReservation){
        return reservationRepository.findById(idReservation).orElse(null);
    }
}
