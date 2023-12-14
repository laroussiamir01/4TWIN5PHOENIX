import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUniversiteComponent} from "./add-universite/add-universite.component";
import {UpdateUniversiteComponent} from "./update-universite/update-universite.component";
import {ListeUniversiteComponent} from "./liste-universite/liste-universite.component";


const routes: Routes = [

      { path: 'listUni', component: ListeUniversiteComponent },
      { path: 'addUni', component: AddUniversiteComponent },
      { path: 'updateUniversite/:idUniversite', component: UpdateUniversiteComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
