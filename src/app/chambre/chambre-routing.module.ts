import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChambreComponent } from './home-chambre/home-chambre.component';
import { ListeChambreComponent } from './liste-chambre/liste-chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';

const routes: Routes = [
  { path: '', component: HomeChambreComponent , children: [ 
  { path: 'listeChambre', component: ListeChambreComponent },
  { path: 'addChambre', component: AddChambreComponent},
  { path: 'updateChambre/:idChambre', component: UpdateChambreComponent },

]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
