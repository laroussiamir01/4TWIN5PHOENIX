import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MCommunService } from 'src/app/services/m-commun.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss'],
})
export class UpdateProjectComponent {
  projet: any;
  name: any;

  constructor(
    private sProject: MCommunService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.name = this.ac.snapshot.params['name'];
    this.projet = {};
  }

  ngOnInit() {
    this.sProject.getProjectByName(this.name).subscribe((data) => {
      this.projet = data;
      console.log(this.projet);
    });
  }

  updateProject() {
    this.sProject.updateProject(this.projet).subscribe(
      () => {
        console.log(this.projet);
        alert('La modification du projet a réussi.');
        this.router.navigate(['/dashboard/projet/showP']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du projet:', error);
      }
    );
  }
  

}
