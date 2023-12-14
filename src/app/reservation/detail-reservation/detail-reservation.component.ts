import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss'],
})
export class DetailReservationComponent implements OnInit {
  reservation: any;
  idReservation: any;

  constructor(
    private route: ActivatedRoute,
    private sReservation: ReservationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('idReservation');
      if (idParam !== null) {
        const resId = +idParam; //persister pour convertir l'id en number
        this.sReservation.getReservationById(resId).subscribe((reservation) => {
          this.reservation = reservation;
        });
      } else {
      }
    });
  }
}
