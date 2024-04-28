import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  id=undefined;
  userRoleObj:any
  userRole=undefined
  user={
    email:'',
    password:''
  }
  err:undefined;
  token:any
  constructor(private _auth:AuthService,private router:Router){}
  ngOnInit(): void {
      
  }
  login(){
    this._auth.login(this.user)
    .subscribe(res=>{
      this.token=res;
      localStorage.setItem('token',this.token.mytoken)
      this.id=this._auth.getUserDataFromToken()._id
      console.log(this.id);
      
      this._auth.getById(this.id).subscribe(res=>{
        this.userRoleObj=res;
        localStorage.setItem('role',this.userRoleObj.role)        
      })
      this.router.navigate(['/home']);
    },
    err=>{
      //console.log(err);
      this.err=err
    }
    )  
    this.ngOnInit();
  }
}
