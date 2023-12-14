import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UniversiteService} from "../../services/universite.service";


@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss']
})
export class AddUniversiteComponent  {
  addUniversiteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private universiteService: UniversiteService )
  {
    this.addUniversiteForm = this.formBuilder.group({
      nomUniversite: ['', Validators.required ],
      adresse: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addUniversiteForm.valid) {
      const blocData = this.addUniversiteForm.value;

      this.universiteService.addUniversite(blocData).subscribe(() => {
          this.router.navigate(['dashboard/universite/listUni']);

        },
        (error) => {
          console.error('Erreur lors de l\'ajout du universite : ', error);

        }
      );
    }
    else{
      console.error('Erreur lors de l\'ajout du universite : ' );
    }

  }


}
