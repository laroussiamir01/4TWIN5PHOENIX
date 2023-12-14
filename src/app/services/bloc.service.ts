import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Bloc} from "../model/bloc";

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  blocUrl = "http://localhost:8090/Bloc";
  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.blocUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  }

  addBloc(bloc: Bloc): Observable<any> {
    return this.http.post<Bloc>(this.blocUrl, bloc, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });}

  getBlocById(idBloc: number): Observable<Bloc> {
    const url = `${this.blocUrl}/${idBloc}`;
    return this.http.get<Bloc>(url);
  }

  updateBloc(idBloc: number, bloc: Bloc): Observable<Bloc> {
    const url = `${this.blocUrl}/${idBloc}`;
    return this.http.put<Bloc>(url, bloc, this.httpOptions);
  }


  deleteBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.blocUrl}/${bloc.idBloc}`;
    return this.http.delete<Bloc>(url, this.httpOptions);
  }

}
