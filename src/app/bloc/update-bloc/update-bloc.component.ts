import {Component, OnInit} from '@angular/core';
import {Bloc} from "../../model/bloc";
import {BlocService} from "../../services/bloc.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.scss']
})
export class UpdateBlocComponent implements OnInit {
  bloc!:Bloc;
  // foyers: Foyer[] = [];
  selectedFoyer!: number;
  constructor(private blocService:BlocService ,
              private ac : ActivatedRoute
    , private router: Router  ){}

  ngOnInit() {

    this.ac.paramMap.subscribe(next => {
      this.blocService.getBlocById(Number(next.get('idBloc')))
        .subscribe(
          res => {
            this.bloc = res;
          },
          error => {
            console.log(error);
            // Handle the error, for example, redirect to an error page
          }
        );
    });
  }
  update(){
    this.blocService.updateBloc(this.bloc.idBloc,this.bloc).subscribe();
    this.router.navigate(['/dashboard/bloc/listBloc']);
  }


}
