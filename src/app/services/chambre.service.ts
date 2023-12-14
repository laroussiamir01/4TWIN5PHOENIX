import { Injectable } from '@angular/core';
import { Chambre } from '../model/chambre';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private chambreUrl = "http://localhost:8090/chambres";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllChambres(): Observable<any[]> {
    return this.http.get<any[]>(this.chambreUrl);
  }

  addChambre(chambre: Chambre): Observable<any> {
    return this.http.post<Chambre>(this.chambreUrl, chambre, this.httpOptions);
  }

  getChambreById(idChambre: number): Observable<Chambre> {
    const url = `${this.chambreUrl}/${idChambre}`;
    return this.http.get<Chambre>(url);
  }

  updateChambre(idChambre: number, chambre: Chambre): Observable<Chambre> {
    const url = `${this.chambreUrl}/${idChambre}`;
    return this.http.put<Chambre>(url, chambre, this.httpOptions);
  }

  deleteChambre(chambre: Chambre): Observable<Chambre> {
    const url = `${this.chambreUrl}/${chambre.idChambre}`;
    return this.http.delete<Chambre>(url, this.httpOptions);
  }
}

