import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.scss']
})
export class ListeFoyerComponent {
  searchTerm: string = '';
  foyers!: any;
  moyenneCapacite!: number;
  chart: any;
  capaciteDisponible !: number;


  constructor(
    private foyerService: FoyerService,
    private router: Router,
 
  ) {}

  ngOnInit() {
    
    this.foyerService.getAllFoyers().subscribe((data) => {
      this.foyers = data;
      console.log(data);
     
    });
  
    this.nbCapaciteDispo();
  }
 
  
    nbCapaciteDispo() {
      console.log('Inside nbCapaciteDispo');
      this.foyers.forEach((foyer: any) => {
        console.log('Inside forEach loop');
        console.log('Foyer Model:', foyer);
        const detailsFoyer = {
          idFoyer: foyer.idFoyer,
          nomFoyer: foyer.nomFoyer,
          capaciteFoyer: foyer.capaciteFoyer,
          capaciteFoyerBloc: foyer.capaciteFoyerBloc
        };
        console.log('Details Foyer:', detailsFoyer);
    
        if (typeof detailsFoyer.capaciteFoyer === 'number' && typeof detailsFoyer.capaciteFoyerBloc === 'number') {
          foyer.capaciteDisponible = detailsFoyer.capaciteFoyer - detailsFoyer.capaciteFoyerBloc;
        } else {
          foyer.capaciteDisponible = 0;
        }
    
        console.log('Capacite Disponible:', foyer.capaciteDisponible);
      });
    }
    
  
  
  get filteFoyers() {
    return this.foyers.filter(
      (foyer: Foyer) =>
        foyer.idFoyer.toString().includes(this.searchTerm) ||
        foyer.capaciteFoyer.toString().includes(this.searchTerm) ||
        foyer.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteFoyer(foyer: Foyer) {
    this.foyerService.deleteFoyer(foyer).subscribe(() => {
      this.foyers = this.foyers.filter((f: Foyer) => f.idFoyer !== foyer.idFoyer);
     
    });
  }

 
  

  updateFoyer(id: any) {
    this.router.navigate(['/dashboard/foyer/updateFoyer', id]);
  }

  details(id: any) {
    this.router.navigate(['/dashboard/foyer/detailFoyer', id]);
  }
}
