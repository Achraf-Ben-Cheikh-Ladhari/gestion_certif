import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbsentService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/absent/';

  create(absent:any){
    return this.http.post(this.url+'ajout',absent);
  }

  delete(id:any){
    return this.http.delete(this.url+'supprimer/'+id)
  }

  update(id:any,absent:any){
    return this.http.put(this.url+'update/'+id,absent)
  }

  getAllAbsents(){
    return this.http.get(this.url+'get');
  }

  getAbsentById(id:any){
    return this.http.get(this.url+'get/'+id);
  }

  getAbsentByEmployeAndFormation(idemp:any,idform:any){
    return this.http.get(this.url+'get/'+idemp+'/'+idform);
  }

  getAbsentByIdEmploye(id:any){
    return this.http.get(this.url+'getabsentbyuser/'+id);
  }

  getAuthorDataFromToken(){
    let token=localStorage.getItem('token');
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }
}
