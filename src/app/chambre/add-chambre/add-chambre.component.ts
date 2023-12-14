import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss']
})
export class AddChambreComponent {
  addChambreForm !: FormGroup;
   constructor(private chambreService: ChambreService, private formBuilder:FormBuilder , private router : Router){
this.addChambreForm = this.formBuilder.group(
  {
    nomChambre:['',Validators.required],
    numeroChambre :['', Validators.min(1)],
    blocChambre:['',Validators.required]
  }
);
   }
   onSubmit(){
    if (this.addChambreForm.valid){
      const Chambre = this.addChambreForm.value;
      this.chambreService.addChambre(Chambre).subscribe(()=>
      { this.router.navigate(['/dashboard/chambre/listeChambre']);

    }
      )
  }
   }
}
