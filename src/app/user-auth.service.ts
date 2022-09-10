import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private _http:HttpClient) { }

  url='http://localhost:3000/users'

  users :any=[]

  getUsers():Observable<any>{
    return this._http.get(this.url)
  }

  //  validateLogin(name:any,password:any) {

    
    
  //   let user;
  //   this.users.forEach((e: { name: any; password: any; })=>{
  //     if (e.name===name && e.password===password) {
  //       user=e
  //     }
  //   })
  //   if (user) {
  //     return user
  //   }
  //   else{
  //     return false
  //   }


    
  // }


  register(user:any){
    return this._http.post(this.url,user)
  }

  update(id:any,data:any){
    return this._http.put(`${this.url}/${id}`,data)
  }

  delete(id:any){
    return this._http.delete(`${this.url}/${id}`)
  }

}
