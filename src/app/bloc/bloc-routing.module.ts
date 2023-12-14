import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBlocComponent} from "./home-bloc/home-bloc.component";
import {AddBlocComponent} from "./add-bloc/add-bloc.component";
import {UpdateBlocComponent} from "./update-bloc/update-bloc.component";
import {DetailBlocComponent} from "./detail-bloc/detail-bloc.component";
import {ListeBlocComponent} from "./liste-bloc/liste-bloc.component";

const routes: Routes = [
  { path: '', component: HomeBlocComponent , children: [ { path: 'listBloc', component: ListeBlocComponent },
      { path: 'addBloc', component: AddBlocComponent },
      { path: 'updateBloc/:idBloc', component: UpdateBlocComponent },
      { path: 'detailBloc/:idBloc', component: DetailBlocComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
