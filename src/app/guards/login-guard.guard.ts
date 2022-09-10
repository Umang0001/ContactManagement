import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private _router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user=JSON.parse(localStorage.getItem("loggedInUser")!)
    if(user) {
      console.log("if");
      
      return true; 
    } else {
      console.log("else");
      
      alert('You have to login first');
      this._router.navigate(['/']);
      return false;
    }
  }
  
}
