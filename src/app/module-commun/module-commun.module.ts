import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModuleCommunRoutingModule } from './module-commun-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';

@NgModule({
  declarations: [
    AddProjectComponent,
    AllProjectComponent,
    HomeProjectComponent,
    UpdateProjectComponent,
    DetailProjectComponent,
  ],
  imports: [CommonModule, ModuleCommunRoutingModule, ReactiveFormsModule,FormsModule],
})
export class ModuleCommunModule {}
