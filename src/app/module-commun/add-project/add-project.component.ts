import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MCommunService } from 'src/app/services/m-commun.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  addP!: FormGroup;
  project: any = {};

  constructor(
    private fb: FormBuilder,
    private sProject: MCommunService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.addP = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.addP.valid) {
      const project = this.addP.value;
      this.sProject.addProject(project).subscribe((data) => {
        console.log(data);
        alert('Réservation ajoutée avec succès');
      });
    }
  }
}
