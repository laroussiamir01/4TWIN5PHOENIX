import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.scss']
})
export class AddFoyerComponent {
addFoyerForm !: FormGroup;
   constructor(private foyerService: FoyerService, private formBuilder:FormBuilder , private router : Router){
this.addFoyerForm = this.formBuilder.group(
  {
    nomFoyer:['',Validators.required],
    capaciteFoyer :['', Validators.min(1)]
  }
);
   }
   onSubmit(){
    if (this.addFoyerForm.valid){
      const foyer = this.addFoyerForm.value;
      this.foyerService.addFoyer(foyer).subscribe(()=>
      { this.router.navigate(['/dashboard/foyer/listFoyer']);

    }
      )
    }
    else{
     

    }
   }
  

}
