import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/formation/';

  create(formation:any){
    return this.http.post(this.url+'ajout',formation);
  }

  delete(id:any){
    return this.http.delete(this.url+'supprimer/'+id)
  }

  update(id:any,article:any){
    return this.http.put(this.url+'update/'+id,article)
  }

  getAllFormation(){
    return this.http.get(this.url+'get');
  }

  getFormationById(id:any){
    return this.http.get(this.url+'get/'+id);
  }

  getFormationByIdUser(id:any){
    return this.http.get(this.url+'getformationbyuser/'+id);
  }

  getAuthorDataFromToken(){
    let token=localStorage.getItem('token');
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }
  
}
