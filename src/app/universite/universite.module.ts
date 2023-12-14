import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniversiteRoutingModule} from "./universite-routing.module";
import {AddUniversiteComponent} from "./add-universite/add-universite.component";
import {ListeUniversiteComponent} from "./liste-universite/liste-universite.component";
import {UpdateUniversiteComponent} from "./update-universite/update-universite.component";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
  ]
})
export class UniversiteModule { }
