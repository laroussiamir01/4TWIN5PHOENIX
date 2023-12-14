import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlocService} from "../../services/bloc.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent {
  addBlocForm: FormGroup;

  constructor(
    private blocService: BlocService,
    private formBuilder: FormBuilder,
    private router: Router,
   )
  {
    this.addBlocForm = this.formBuilder.group({
      nomBloc: ['', Validators.required ],
      capaciteBloc: ['', Validators.min(5)],
    });
  }
  ngOnInit(): void {
    // Initialize the form with validation
    this.addBlocForm = this.formBuilder.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', [Validators.required, Validators.min(5)]]
    });
  }
  onSubmit(){
    if (this.addBlocForm.valid){
      const bloc = this.addBlocForm.value;
      this.blocService.addBloc(bloc).subscribe(()=>
        { this.router.navigate(['/dashboard/bloc/listBloc']);

        }
      )
    }
    else{


    }
  }
}
