import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AbsentService } from '../services/absent.service';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  formations: any;
  formateur: any;
  users: any;
  id: any;
  userName: any;
  formationByCertif: any;
  resabsent: any;
  success = false;
  certifGetted: any;
  // Get current date
  currentDate = new Date();
  // Format date as dd-mm-YYYY
  formattedDate = `${this.currentDate.getDate().toString().padStart(2, '0')}-${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}-${this.currentDate.getFullYear()}`;
  certification = {
    titre: '',
    description: '',
    date: this.formattedDate,
    lieu: '',
    idFormateur: '',
    idFormation: '',
    idEmploye: ''
  }
  
  constructor(private _auth: AuthService,
    private formationService: FormationService,
    private router: Router,
    private _absent: AbsentService,
    private _certif: CertificationService) { }

  ngOnInit() {
    this.id = this._auth.getUserDataFromToken()._id;
    this._auth.getById(this.id).subscribe(res => {
      this.users = res;
      this.userName = this.users.name;
    })
    this.formationService.getFormationByIdUser(this.id).subscribe(res => {
      this.formations = res;
      //console.log(res);
    })

  }
  gerercertif(id: any) {
    this.formationService.getFormationById(id).subscribe(res => {
      this.formationByCertif = res;
      //console.log(this.formationByCertif);
      for (let i = 0; i < this.formationByCertif.employes.length; i++) {
        this._absent.getAbsentByEmployeAndFormation(this.formationByCertif.employes[i], id).subscribe(res => {
          this.resabsent = res;
          if (this.resabsent.abs == false) {
            this.certification.titre = this.formationByCertif.titre;
            this.certification.description = this.formationByCertif.description;
            this.certification.lieu = this.formationByCertif.lieu;
            this.certification.idFormateur = this.formationByCertif.formateur;
            this.certification.idFormation = id;
            this.certification.idEmploye = this.formationByCertif.employes[i]

            //console.log(this.certifGetted.idEmploye);


            this._certif.create(this.certification).subscribe(res => {
              this.success = true;
              this.formationByCertif.certifGenerated = true
              this.formationService.update(id, this.formationByCertif).subscribe()
              location.reload();
            })
          }
        })


      }
    })
  }

}
