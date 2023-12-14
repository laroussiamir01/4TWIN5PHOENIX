import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universite} from "../model/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  universiteUrl1:any ="http://localhost:8090";
  retrieveUniversites(): Observable<any[]> {
    return this.http.get<any[]>(this.universiteUrl1+"/universites");
  }
  addUniversite(universite: Universite): Observable<any> {
    return this.http.post<Universite>(this.universiteUrl1+"/adduniversite",universite, this.httpOptions);
  }
  retrieveUniversite(idUniversite: number): Observable<Universite> {
    return this.http.get<Universite>(this.universiteUrl1 +'/universite/'+ idUniversite);
  }
  updateUniversite(idUniversite: number, bloc: Universite): Observable<Universite> {
    const url = `${this.universiteUrl1}/${idUniversite}`;
    return this.http.put<Universite>(url, bloc, this.httpOptions);
  }
  deleteUniversite (universite: Universite): Observable<Universite> {
    const url=this.universiteUrl1+'/deleteuniversite/'+ universite.idUniversite;
    return this.http.delete<Universite>(url);
  }

}
