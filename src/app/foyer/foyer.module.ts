import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { HomeFoyerComponent } from './home-foyer/home-foyer.component';
import { DetailFoyerComponent } from './detail-foyer/detail-foyer.component';
import { Foyer3dComponent } from './foyer3d/foyer3d.component';


@NgModule({
  declarations: [
    HomeFoyerComponent,
    DetailFoyerComponent,
    Foyer3dComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule
  ]
})
export class FoyerModule { }
