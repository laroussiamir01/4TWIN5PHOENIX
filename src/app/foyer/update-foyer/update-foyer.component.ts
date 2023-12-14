import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.scss']
})
export class UpdateFoyerComponent implements OnInit {
  constructor(private foyerService: FoyerService,  private ac:ActivatedRoute 
    , private router:Router){}
    foyerToUpdate !:any;
   // @Output()notif=new EventEmitter();
   ngOnInit() {
    this.ac.paramMap.subscribe(next => {
      const idFoyer = Number(next.get('idFoyer'));
      console.log('ID Foyer:', idFoyer);
  
      this.foyerService.getFoyerById(idFoyer).subscribe(
        res => {
          console.log('Foyer Data:', res);
          this.foyerToUpdate = res;
        },
        error => console.log('Error fetching Foyer:', error)
      );
    });
  }
  
  update() {
    console.log('Updating Foyer:', this.foyerToUpdate);
  
    this.foyerService.updateFoyer(this.foyerToUpdate.idFoyer, this.foyerToUpdate).subscribe(
      () => {
        console.log('Foyer updated successfully');
      },
      error => console.error('Error updating Foyer:', error)
    );
  
    this.router.navigate(['/dashboard/foyer/listFoyer']);
  }
  
  
   
    }
