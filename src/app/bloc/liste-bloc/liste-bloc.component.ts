import { Component } from '@angular/core';
import {BlocService} from "../../services/bloc.service";
import {Router} from "@angular/router";
import {Bloc} from "../../model/bloc";

@Component({
  selector: 'app-liste-bloc',
  templateUrl: './liste-bloc.component.html',
  styleUrls: ['./liste-bloc.component.scss']
})
export class ListeBlocComponent {

  constructor( private blocService: BlocService, private router: Router) {
  }

  blocs!: any;

  searchTerm: string = '';

  ngOnInit() {

    this.blocService.getAllBlocs().subscribe((data) => {
      console.log('Data from API:', data);
      this.blocs = data;
      console.log('Blocs after assignment:', this.blocs);


    });
  }


  deleteBloc(bloc: Bloc) {
    this.blocService.deleteBloc(bloc).subscribe();
    window.location.reload();

  }

  updateBloc(id: any) {
    this.router.navigate(['/dashboard/bloc/updateBloc', id]);
  }

  details(id: any) {
    this.router.navigate(['/dashboard/bloc/detailBloc', id]);
  }


}
