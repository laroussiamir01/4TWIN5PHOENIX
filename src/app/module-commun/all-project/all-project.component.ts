import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MCommunService } from 'src/app/services/m-commun.service';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss'],
})
export class AllProjectComponent {
  projects: any[] = [];

  constructor(private sProject: MCommunService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProjects();
  }
  getAllProjects() {
    this.sProject.getAllProjects().subscribe((data: any) => {
      console.log(data);
      this.projects = data;
    });
  }
  editProjet(name: any) {
    this.router.navigate(['dashboard/projet/up', name]);
  }
  deleteProject(name: any) {
    this.sProject.deleteProject(name).subscribe((data) => {
      console.log(data);
      this.getAllProjects();
    });
  }
  detailP(name: any) {
    this.router.navigate(['dashboard/projet/det', name]);
  }
  addP() {
    this.router.navigate(['dashboard/projet/addP']);
  }
}
