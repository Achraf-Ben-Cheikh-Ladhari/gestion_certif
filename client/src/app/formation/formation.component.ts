import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';
import { AbsentService } from '../services/absent.service';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: any;
  formateur: any;
  users: any;
  constructor(
    private _auth: AuthService, 
    private formationService: FormationService, 
    private router: Router,
    private _absent:AbsentService, 
    private _certification:CertificationService
  ) 
  { }

  ngOnInit() {
    this._auth.getAll().subscribe(res => {
      this.users = res;
    })
    this.formationService.getAllFormation().subscribe(res => {
      this.formations = res;
      for (let i = 0; i < this.formations.length; i++) {
        for (let j = 0; j < this.users.length; j++) {
          if (this.formations[i].formateur === this.users[j]._id) {
            this.formations[i].formateur = this.users[j].name
          }
        }
      }
    })

  }
  delete(id:any){
    console.log(id);
    this.formationService.delete(id).subscribe()
    this._absent.delete(id).subscribe()
    this._certification.delete(id).subscribe()
    location.reload();
  }

}
