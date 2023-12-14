import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.scss']
})
export class UpdateChambreComponent implements OnInit {
  constructor(private chambreService: ChambreService, private route: ActivatedRoute, private router: Router) {}
  chambreToUpdate!: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idChambre = Number(params.get('idChambre'));

      this.chambreService.getChambreById(idChambre).subscribe(
        chambre => {
          this.chambreToUpdate = chambre;
        },
        error => console.log('Error fetching Chambre:', error)
      );
    });
  }

  update() {
    this.chambreService.updateChambre(this.chambreToUpdate.idChambre, this.chambreToUpdate).subscribe(
      () => {
        console.log('Chambre updated successfully');
      },
      error => console.error('Error updating Chambre:', error)
    );

    this.router.navigate(['/dashboard/chambre/listeChambre']);
  }
}
