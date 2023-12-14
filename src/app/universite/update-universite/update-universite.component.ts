import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../services/universite.service";

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss']
})
export class UpdateUniversiteComponent implements OnInit{
  universite!:any;


  constructor(private universiteService:UniversiteService ,
                private ac : ActivatedRoute
    , private router: Router  ){}

  ngOnInit() {

    this.ac.paramMap.subscribe(next=>this.universiteService.retrieveUniversite(Number(next.get('idUniversite')))
        .subscribe(res=>{this.universite=res}),
      error=>console.log(error));
  }
  update(){
    this.universiteService.updateUniversite(this.universite.idUniversite,this.universite).subscribe();

    this.router.navigate(['/dashboard/universite/listUni']);
  }
}
