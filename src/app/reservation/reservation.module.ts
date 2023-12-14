import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeReservationComponent } from './home-reservation/home-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { ReservationRoutingModule } from './reservation-routing.module';

@NgModule({
  declarations: [HomeReservationComponent],

  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
