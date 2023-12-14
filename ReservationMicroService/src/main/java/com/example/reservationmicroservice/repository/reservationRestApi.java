package com.example.reservationmicroservice.repository;

import com.example.reservationmicroservice.entity.Reservation;
import com.example.reservationmicroservice.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
//api
@RequestMapping("/reservations")
public class reservationRestApi {
    @Autowired
    private ReservationService reservationService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
        return new ResponseEntity<>(reservationService.addReservation(reservation), HttpStatus.OK);
    }
    @GetMapping("getReservationById/{idReservation}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable(value = "idReservation") long idReservation) {
        Reservation reservation = reservationService.getReservationByIdReservation(idReservation);
        if (reservation != null) {
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/allReservations")
    public List<Reservation> getListReservation() {
        return reservationService.gettAllReservations();
    }

    @PutMapping(value = "/updateRes/{idReservation}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Reservation> updateReservation(@PathVariable(value = "idReservation") long idReservation,
                                             @RequestBody Reservation reservation) {
        return new ResponseEntity<>(reservationService.updateReservation(idReservation, reservation),
                HttpStatus.OK);
    }


    @DeleteMapping(value = "/deleteRes/{idReservation}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteReservation(@PathVariable(value = "idReservation") long idReservation) {
        return new ResponseEntity<>(reservationService.deleteReservation(idReservation), HttpStatus.OK);
    }

}
