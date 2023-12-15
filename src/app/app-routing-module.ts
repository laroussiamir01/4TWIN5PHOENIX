import { ReservationModule } from './reservation/reservation.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      { path: 'universite',loadChildren:()=>
          import('./universite/universite.module').then(m=>m.UniversiteModule)},

      { path: 'bloc',loadChildren:()=>
          import('./bloc/bloc.module').then(m=>m.BlocModule)},
    {
        path: 'foyer',
        loadChildren: () =>
          import('./foyer/foyer.module').then((m) => m.FoyerModule),
      },

      {
        path: 'reservation',
        loadChildren: () =>
          import('./reservation/reservation.module').then(
            (m) => m.ReservationModule
          ),
      },
      {
        path: 'projet',
        loadChildren: () =>
          import('./module-commun/module-commun.module').then(
            (m) => m.ModuleCommunModule
          ),
      },
      { path: 'chambre',
      loadChildren:()=>
          import('./chambre/chambre.module').then(
            (m)=>m.ChambreModule)},
            
            { path: 'evenement',loadChildren:()=>
            import('./evenement/evenement.module').then(m=>m.EvenementModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
