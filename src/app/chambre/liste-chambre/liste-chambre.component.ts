import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-liste-chambre',
  templateUrl: './liste-chambre.component.html',
  styleUrls: ['./liste-chambre.component.scss']
})
export class ListeChambreComponent implements OnInit {
  searchTerm: string = '';
  chambres: Chambre[] = [];
  capaciteDisponible!: number;

  constructor(
    private chambreService: ChambreService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.chambreService.getAllChambres().subscribe((data) => {
      this.chambres = data;
    });
  }

  get filteChambres() {
    return this.chambres ? this.chambres.filter(
      (chambre: Chambre) =>
        chambre.idChambre.toString().includes(this.searchTerm) ||
        chambre.numeroChambre.toString().includes(this.searchTerm) ||
        chambre.nomChambre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        chambre.blocChambre.toString().includes(this.searchTerm)
    ) : [];
  }

  deleteChambre(chambre: Chambre) {
    this.chambreService.deleteChambre(chambre).subscribe(() => {
      this.chambres = this.chambres.filter((c: Chambre) => c.idChambre !== chambre.idChambre);
    });
  }

  updateChambre(id: any) {
    this.router.navigate(['/dashboard/chambre/updateChambre', id]);
  }

  
}
