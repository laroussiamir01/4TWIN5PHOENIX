import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import { AppRoutingModule } from './app-routing-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { ListeReservationComponent } from './reservation/liste-reservation/liste-reservation.component';
import { UpdateReservationComponent } from './reservation/update-reservation/update-reservation.component';
import { DetailReservationComponent } from './reservation/detail-reservation/detail-reservation.component';
import {AddUniversiteComponent} from "./universite/add-universite/add-universite.component";
import {DeleteUniversiteComponent} from "./universite/delete-universite/delete-universite.component";
import {ListeUniversiteComponent} from "./universite/liste-universite/liste-universite.component";
import {UpdateUniversiteComponent} from "./universite/update-universite/update-universite.component";
import { AddChambreComponent } from './chambre/add-chambre/add-chambre.component';
import { ListeChambreComponent } from './chambre/liste-chambre/liste-chambre.component';
import { UpdateChambreComponent } from './chambre/update-chambre/update-chambre.component';
import { AddBlocComponent } from './bloc/add-bloc/add-bloc.component';
import { DetailBlocComponent } from './bloc/detail-bloc/detail-bloc.component';
import { HomeBlocComponent } from './bloc/home-bloc/home-bloc.component';
import { ListeBlocComponent } from './bloc/liste-bloc/liste-bloc.component';
import { UpdateBlocComponent } from './bloc/update-bloc/update-bloc.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { HomeEvenementComponent } from './evenement/home-evenement/home-evenement.component';
import { ListeEvenementComponent } from './evenement/liste-evenement/liste-evenement.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddFoyerComponent,
    ListeFoyerComponent,
    UpdateFoyerComponent,
    AddReservationComponent,
    ListeReservationComponent,
    UpdateReservationComponent,
    DetailReservationComponent,
    AddUniversiteComponent,
    DeleteUniversiteComponent,
    ListeUniversiteComponent,
    UpdateUniversiteComponent,
    AddChambreComponent,
    ListeChambreComponent,
    UpdateChambreComponent,
    AddBlocComponent,
    DetailBlocComponent,
    ListeBlocComponent,
    UpdateBlocComponent,
    AddEvenementComponent,
    HomeEvenementComponent,
    ListeEvenementComponent,
    UpdateEvenementComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
