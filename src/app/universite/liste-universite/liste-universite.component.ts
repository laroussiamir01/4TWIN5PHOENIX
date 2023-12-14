import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../services/universite.service";
import {Router} from "@angular/router";
import * as QRCode from 'qrcode'
import {Universite} from "../../model/universite";
@Component({
  selector: 'app-liste-universite',
  templateUrl: './liste-universite.component.html',
  styleUrls: ['./liste-universite.component.scss']
})
export class ListeUniversiteComponent implements OnInit{
  qrCodeUrl: string | null = null;

  constructor(private universiteService : UniversiteService , private router:Router){}
  universites!:any;

  searchTerm: string = '';
  ngOnInit() {

    this.universiteService.retrieveUniversites().subscribe((data) => {
      console.log('Data from API:', data);
      this.universites = data;
      console.log('Blocs after assignment:', this.universites);
      this.generateQRCodeForbloc()

    });
  }
  generateQRCodeForbloc() {
    this.universites.forEach((bloc: any) => {
      const detailsBloc = {
        idUniversite: bloc.idUniversite,
        nomUniversite: bloc.nomUniversite,
        adresse: bloc.adresse,
      };

      QRCode.toDataURL(JSON.stringify(detailsBloc), (err, url) => {
        if (!err) {
          // Créez une propriété qrCodeUrl pour chaque universite
          bloc.qrCodeUrl = url;
        } else {
          console.error('Erreur lors de la génération du QR Code:', err);
        }
      });
    });
  }


  get filteBlocs() {
    return this.universites.filter(
      (universite:Universite) =>
        universite.idUniversite.toString().includes(this.searchTerm) ||
        universite.nomUniversite
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())||
        universite.adresse
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
  }
  deleteBloc(bloc:Universite){
    this.universiteService.deleteUniversite(bloc).subscribe();
    window.location.reload();

  }

  updateBloc(id:any){
    this.router.navigate(['dashboard/universite/updateUniversite', id]);
  }

}
