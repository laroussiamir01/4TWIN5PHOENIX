import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MCommunService } from 'src/app/services/m-commun.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss'],
})
export class DetailProjectComponent {
  projet: any;
  name: any;

  constructor(
    private route: ActivatedRoute,
    private sProjet: MCommunService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const nameParam = params.get('name');

      if (nameParam !== undefined && nameParam !== null) {
        this.sProjet.getProjectByName(nameParam).subscribe((projet) => {
          this.projet = projet; // Corrected assignment
        });
      } else {
        // Handle the case when 'nameParam' is not provided
      }
    });
  }
}
