import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReservationComponent } from './home-reservation/home-reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeReservationComponent,
    children: [
      { path: 'showRes', component: ListeReservationComponent },
      { path: 'addReservation', component: AddReservationComponent },
      {
        path: 'updateReservation/:idReservation',
        component: UpdateReservationComponent,
      },
      {
        path: 'detailReservation/:idReservation',
        component: DetailReservationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
