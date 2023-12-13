package com.example.reservationmicroservice.repository;

import com.example.reservationmicroservice.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
