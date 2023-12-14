import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss'],
})
export class UpdateReservationComponent implements OnInit {
  reservation: any;
  idReservation: any;
  constructor(
    private sReservation: ReservationService,
    private ac: ActivatedRoute,
    //private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.idReservation = this.ac.snapshot.params['idReservation'];
  }
  ngOnInit() {
    this.sReservation
      .getReservationById(this.idReservation)
      .subscribe((data) => {
        this.reservation = data;
        console.log(this.reservation);
      });
  }

  updateReservation() {
    this.sReservation
      .updateReservation(this.idReservation, this.reservation)
      .subscribe(
        () => {
          console.log(this.reservation);
          alert('La modification de la réservation a réussi.');
          this.router.navigate(['/dashboard/reservation/showRes']);
        },
        (error) => {
          console.error(
            'Erreur lors de la mise à jour de la réservation:',
            error
          );
        }
      );
  }
}
