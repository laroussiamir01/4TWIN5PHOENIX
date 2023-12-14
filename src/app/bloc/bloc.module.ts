import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import {HomeBlocComponent} from "./home-bloc/home-bloc.component";


@NgModule({
  declarations: [
    HomeBlocComponent

  ],
  imports: [
    CommonModule,
    BlocRoutingModule
  ]
})
export class BlocModule { }
