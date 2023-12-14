import { Reservation } from './../model/reservation';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  ReservationUrl = 'http://localhost:8090/reservations';
  getAllReservations(): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>(`${this.ReservationUrl}/allReservations`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  }

  addReservation(reservation: Reservation): Observable<any> {
    return this.http.post<Reservation>(this.ReservationUrl, reservation, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getReservationById(idReservation: number): Observable<Reservation> {
    const url = `http://localhost:8090/reservations/getReservationById/${idReservation}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(
    idReservation: number,
    Reservation: Reservation
  ): Observable<Reservation> {
    const url = `http://localhost:8090/reservations/updateRes/${idReservation}`;
    return this.http.put<Reservation>(url, Reservation, this.httpOptions);
  }

  deleteReservation(Reservation: Reservation): Observable<Reservation> {
    const url = `http://localhost:8090/reservations/deleteRes/${Reservation.idReservation}`;
    return this.http.delete<Reservation>(url, this.httpOptions);
  }
}
