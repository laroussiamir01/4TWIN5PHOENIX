import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEvenementComponent } from './home-evenement/home-evenement.component';
import { ListeEvenementComponent } from './liste-evenement/liste-evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeEvenementComponent,
    children: [
      { path: 'listEvenement', component: ListeEvenementComponent },
      { path: 'addEvenement', component: AddEvenementComponent },
      {
        path: 'updateEvenement/:idEvenement',
        component: UpdateEvenementComponent,
      },
      //  { path: 'detailFoyer/:idFoyer', component: DetailFoyerComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementRoutingModule {}
