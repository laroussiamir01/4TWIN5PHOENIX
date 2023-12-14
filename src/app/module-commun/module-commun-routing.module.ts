import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectComponent } from './all-project/all-project.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProjectComponent,
    children: [
      { path: 'showP', component: AllProjectComponent },
      { path: 'addP', component: AddProjectComponent },
      { path: 'up/:name', component: UpdateProjectComponent },
      { path:'det/:name',component:DetailProjectComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCommunRoutingModule {}
