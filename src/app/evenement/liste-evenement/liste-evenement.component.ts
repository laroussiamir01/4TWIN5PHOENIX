import {Component, OnInit} from '@angular/core';
import {Evenement} from "../../model/evenement";

import {Router} from "@angular/router";
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit{

  evenement= new Evenement;
  constructor(private evenementService:EvenementService ,private router:Router){}
  evenements !:any[];
  participeDeja=true;
  idEvenement!:any;
  idEtudiant=8;
  // isAffectationEnCours!:boolean;
  today: Date = new Date();
  Showupdate=false;
  evenementtoupdate:any;
  condition=false;
  dateFinFormated!:Date;
  existedeja!:any;


  ngOnInit() {
    // this.etudiantService.etudiantParticipeDeja(8,11).subscribe(
    //   (d)=>{
    //     console.log(d)
    //     this.participeDeja=d;
    //   }
    // )
    this.evenementService.getAllEvenements().subscribe((data)=>{
        this.evenements=data;
        console.log(data);
        //  console.log(this.today.getDate());

      },
      (error)=>{
        console.log('test',error.status)
        switch (error.status){
          case 500:alert('500');
            console.log('helloooooooooo');
            break;
          case 0:alert('0');break;
          case 401:alert('401');break;
          default:alert('Une erreur s\'est produite.');
        }
      }
    );

  }
  deleteEvenemnt(evenement:Evenement){
    this.evenementService.deleteEvenement(evenement).subscribe((data)=>{
      console.log(data);
      this.getAll();
    });

  }
  updateEvenement(id:any){
    this.router.navigate(['dashboard/evenement/updateEvenement', id]);
  }



  isDateFinDepassee(dateFin: Date): boolean {
    const today = new Date();
    return dateFin < today;
  }
  showForm(etudiant:any){
    this.evenementtoupdate=etudiant;
    this.Showupdate=true;
  }
  afterrecieveData(e:any){
    this.Showupdate=false;
  }
  // etudiantDejaParticipe1(etudiantId: number, evenementId: number): Observable<boolean> {
  //   return this.etudiantService.etudiantParticipeDeja(etudiantId, evenementId).pipe(
  //     map((d) => {
  //       console.log(d);
  //       this.participeDeja = d;
  //       return !!d; // Convertit la valeur en un booléen
  //     })
  //   );
  // }

  // verifierParticipation(idEtudiant: number, idEvenement: number) {
  //   this.etudiantService.etudiantParticipeDeja(idEtudiant,idEvenement).subscribe(result => {
  //     if (result) {
  //       console.log("L'étudiant participe déjà à l'événement.");
  //     } else {
  //       console.log("L'étudiant ne participe pas encore à l'événement.");
  //     }
  //   });
  // }
  getAll(){
    this.evenementService.getAllEvenements().subscribe((data)=>{
      this.evenements=data;
      console.log(data);

    })
  }



}
