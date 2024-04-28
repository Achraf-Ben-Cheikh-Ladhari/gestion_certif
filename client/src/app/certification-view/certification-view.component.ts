import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AbsentService } from '../services/absent.service';
import { CertificationService } from '../services/certification.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-certification-view',
  templateUrl: './certification-view.component.html',
  styleUrls: ['./certification-view.component.css']
})
export class CertificationViewComponent implements OnInit {

  certifications:any;
  idUser:any;
  roleUser:any;
  userEmploye:any;
  userFormateur:any;
  employeName='';
  formateurName='';
  constructor(private _auth: AuthService,
    private formationService: FormationService,
    private router: Router,
    private _absent: AbsentService,
    private _certif: CertificationService) { }



  ngOnInit() {
    this.idUser = this._auth.getUserDataFromToken()._id;
    this.roleUser=this._auth.getUserRole();    
    if (this.roleUser=="formateur"){
      this._certif.getCertifByIdFormateur(this.idUser).subscribe(res=>{
        this.certifications=res;
        //console.log(this.certifications);
        for(let i=0;i<this.certifications.length;i++){
          this._auth.getById(this.certifications[i].idEmploye).subscribe(res=>{        
          this.userEmploye=res;          
          this.userFormateur=this._auth.getUserDataFromToken();
          this.certifications[i].idFormateur = this.userFormateur.fullname.replace("undefined", "");
          this.certifications[i].idEmploye=this.userEmploye.name;
        })
      }
      })
    }else if (this.roleUser=="employe"){
      this._certif.getCertifByIdEmploye(this.idUser).subscribe(res=>{
        this.certifications=res;
        for(let i=0;i<this.certifications.length;i++){
          this._auth.getById(this.certifications[i].idFormateur).subscribe(res=>{
          this.userFormateur=res;
          this.userEmploye=this._auth.getUserDataFromToken();
          this.certifications[i].idEmploye= this.userEmploye.fullname.replace("undefined", "");
          this.certifications[i].idFormateur=this.userFormateur.name
        })
        }
        
      })
    }
  }

}
