package com.example.reservationmicroservice;

import com.example.reservationmicroservice.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReservationMicroServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReservationMicroServiceApplication.class, args);
    }
@Autowired
    private ReservationRepository reservationRepository;
}
