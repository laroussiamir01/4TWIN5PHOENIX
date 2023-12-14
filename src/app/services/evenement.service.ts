import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "../model/evenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  evenementUrl:any ="http://localhost:8090/evenements";

  getAllEvenements(): Observable<any[]> {
    return this.http.get<any[]>(this.evenementUrl);
  }
  addEvenement(evenement: Evenement): Observable<any> {
    return this.http.post<Evenement>(this.evenementUrl,evenement,this.httpOptions);
  }
  getEvenementById(idEvenement: number): Observable<Evenement> {
    return this.http.get<Evenement>(this.evenementUrl+"/"+ idEvenement);
  }
  updateEvenement(idEvenement: number, evenement:Evenement): Observable<Evenement> {
    // return this.http.put<Etudiant>(this.etudiantUrl+'/updateEtudiant/'+ idEtudiant, etudiant);
    return this.http.put<Evenement>(this.evenementUrl +"/"+idEvenement,evenement);
  }
  deleteEvenement (evenement: Evenement): Observable<Evenement> {
    /**const url=this.etudiantUrl+'/deleteEtudiant/'+ etudiant.idEtudiant;
     return this.http.delete<Etudiant>(url);**/
    return this.http.delete<Evenement>(this.evenementUrl +"/"+evenement.idEvenement);
  }

}
