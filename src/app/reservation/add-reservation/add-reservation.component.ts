import { Reservation } from './../../model/reservation';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {
  ngOnInit(): void {}
  addRes: FormGroup;
  reservations: any[] = [];
  reservation: any = {};

  constructor(
    private fb: FormBuilder,
    private sReservation: ReservationService,
    private router: Router
  ) {
    this.addRes = this.fb.group({
      anneeUniversite: ['', [Validators.required, this.validateYear]],
      estValide: [false, Validators.required],
    });
  }

  onSubmit() {
    if (this.addRes.valid) {
      const reservation = this.addRes.value;
      this.sReservation.addReservation(reservation).subscribe((data) => {
        console.log(data);
        alert('Réservation ajoutée avec succès');
        //this.router.navigate(['/dashboard/reservation/allres']);
      });
      this.getRes();
    }
  }

  validateYear(control: AbstractControl): { [key: string]: boolean } | null {
    const currentYear = new Date().getFullYear();
    const selectedYear = new Date(control.value).getFullYear();

    if (selectedYear < currentYear) {
      return { invalidYear: true };
    }

    return null;
  }
  getRes() {
    this.sReservation.getAllReservations().subscribe((data: any) => {
      console.log(data);
      this.reservations = data;
    });
  }
}
