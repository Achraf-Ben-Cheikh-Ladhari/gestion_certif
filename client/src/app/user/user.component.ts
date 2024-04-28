import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users:any;
  constructor(private _auth:AuthService){}
  ngOnInit(){
    this._auth.getAll().subscribe(res=>{
      this.users=res;
    })
  }
}
