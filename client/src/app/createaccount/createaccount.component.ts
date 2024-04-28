import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { FormationService } from '../services/formation.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateAccountComponent implements OnInit {
  err = undefined;
  formations = '';
  user: any = {
    name: '',
    email: '',
    password: '',
    role: '',
    formations: []
  };
 /* formationGet: any = {
    id: '',
    titre: '',
    description: '',
    duree: '',
    lieu: '',
  }*/
  nameAuthor: any = '';

  id: any;
  constructor(private _auth: AuthService, private router: Router, private act: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');
    if (this.id != undefined) {
      this._auth.getById(this.id).subscribe(res => {
        this.user = res;
        this.user.password = '';
        this.nameAuthor = this.user.name;
      })
    }
    /*this.formation.getAllArticle().subscribe(res => {
      this.formationGet = res;
    })*/


  }
  modify() {
    this._auth.update(this.id, this.user).subscribe(res => {
      location.reload();
    })
  }
  register() {
   this._auth.register(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/home']);
        }, err => {
          this.err = err;
        }
      )
  }
  /*toggleFormation(formation: any, event: MatCheckboxChange) {
    if (event.checked && !this.user.formations.includes(formation._id)) {
      this.user.formations.push(formation._id); // Add formation
    } else if (!event.checked) {
      const index = this.user.formations.indexOf(formation._id);
      if (index !== -1) {
        this.user.formations.splice(index, 1); // Remove formation if already present
      }
    }
    // console.log(this.user.formations);
  }*/
}
