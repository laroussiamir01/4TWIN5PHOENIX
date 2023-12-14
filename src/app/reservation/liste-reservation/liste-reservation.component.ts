import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.scss'],
})
export class ListeReservationComponent implements OnInit {
  reservation: any = {}; // Initialisation avec un objet vide pour le pdf
  pdfGenerated = false;
  reservations: any[] = [];
  searchTerm: string = '';
  qrCodeUrl: string | null = null; // Nouvelle propriété pour contenir l'URL du code QR
  constructor(
    private sReservation: ReservationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getRes();
  } 
  getRes() {
    this.sReservation.getAllReservations().subscribe((data: any) => {
      console.log(data);
      this.reservations = data;
    });
  }

  addReservation() {
    this.router.navigate(['dashboard/reservation/addReservation']);
  }
  showDetails(idReservation: any) {
    this.router.navigate([
      'dashboard/reservation/detailReservation',
      idReservation,
    ]);
  }

  deleteReservation(resv: Reservation) {
    this.sReservation.deleteReservation(resv).subscribe((data) => {
      console.log(data);
      this.getRes();
    });
  }
  editReservation(idReservation: any) {
    this.router.navigate([
      'dashboard/reservation/updateReservation',
      idReservation,
    ]);
  }

  get filteredReservations() {
    return this.reservations.filter(
      (reservation) =>
        reservation.idReservation.toString().includes(this.searchTerm) ||
        reservation.anneeUniversite.toString().includes(this.searchTerm) ||
        reservation.commentaire
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        (reservation.chambre &&
          reservation.chambre.numeroChambre
            .toString()
            .includes(this.searchTerm))
    );
  }
}
