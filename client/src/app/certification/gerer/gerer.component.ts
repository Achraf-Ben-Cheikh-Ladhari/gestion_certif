import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsentService } from 'src/app/services/absent.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormationService } from 'src/app/services/formation.service';
import {ThemePalette} from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-gerer',
  templateUrl: './gerer.component.html',
  styleUrls: ['./gerer.component.css']
})
export class GererComponent implements OnInit{
  employes:any[]=[];
  employesName:any[]=[];
  users:any;
  usersChecked:any[]=[];
  id:any;
  message='';
  absent={
    abs:false,
    idEmploye:'',
    idFormation:''
  }
  formation:any;
  color:ThemePalette='accent';
  constructor(private _auth:AuthService,private _absent:AbsentService,private _formation:FormationService,private router:Router, private act: ActivatedRoute){}
  ngOnInit() {
    this.id=this.act.snapshot.paramMap.get('id');
    this._formation.getFormationById(this.id).subscribe(res=>{
      this.formation=res;
      this.employes=this.formation.employes; 
      for (let i=0;i<this.employes.length;i++){
      this._auth.getById(this.employes[i]).subscribe(res=>{
        this.users=res;
        this.employesName.push(this.users)
      })        
    }                
    })    
    
  }
  save(){
    if (this.formation.absentGenerated==false){
    this.formation.absentGenerated=true;
    this._formation.update(this.id,this.formation).subscribe()
    for (let i=0;i<this.usersChecked.length;i++){
      this.absent.idEmploye=this.usersChecked[i];
      this.absent.idFormation=this.id;
      this._absent.create(this.absent).subscribe(res=>{
        this.router.navigate(['certification/']);
      })
    }
    }else{
      this.message="Vous avez déja faire l'appele";
    }
  }

  toggleUser(user: any, event: MatCheckboxChange) {
    if (event.checked && !this.usersChecked.includes(user._id)) {
      this.usersChecked.push(user._id); // Add formation
    } else if (!event.checked) {
      const index = this.usersChecked.indexOf(user._id);
      if (index !== -1) {
        this.usersChecked.splice(index, 1); // Remove formation if already present
      }
    }

     //console.log(this.usersChecked);
  }
  
}
