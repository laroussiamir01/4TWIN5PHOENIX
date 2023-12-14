import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { HomeChambreComponent } from './home-chambre/home-chambre.component';





@NgModule({
  declarations: [
    HomeChambreComponent,

  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,

  ]
})
export class ChambreModule { }
