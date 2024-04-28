import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/certification/';

  create(certification:any){
    return this.http.post(this.url+'ajout',certification);
  }


  getAllCertif(){
    return this.http.get(this.url+'get');
  }

  getCertifById(id:any){
    return this.http.get(this.url+'get/'+id);
  }

  getCertifByIdFormateur(id:any){
    return this.http.get(this.url+'getcertificationbyformateur/'+id);
  }

  getCertifByIdEmploye(id:any){
    return this.http.get(this.url+'getcertificationbyemploye/'+id);
  }

  delete(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }


  getAuthorDataFromToken(){
    let token=localStorage.getItem('token');
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }
  
}
