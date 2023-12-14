import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Foyer } from '../model/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http:HttpClient) { }
  foyerUrl = "http://localhost:8090/foyers";
  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.foyerUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  }

  addFoyer(foyer: Foyer): Observable<any> {
    return this.http.post<Foyer>(this.foyerUrl, foyer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });}

    getFoyerById(idFoyer: number): Observable<Foyer> {
      const url = `${this.foyerUrl}/${idFoyer}`;
      return this.http.get<Foyer>(url);
    }

     updateFoyer(idFoyer: number, foyer: Foyer): Observable<Foyer> {
      const url = `${this.foyerUrl}/${idFoyer}`;
      return this.http.put<Foyer>(url, foyer, this.httpOptions);
    }


    deleteFoyer(foyer: Foyer): Observable<Foyer> {
      const url = `${this.foyerUrl}/${foyer.idFoyer}`;
      return this.http.delete<Foyer>(url, this.httpOptions);
    }


}
