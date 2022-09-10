import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackToLoginGuard implements CanActivate {
  constructor(private _router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user=JSON.parse(localStorage.getItem("loggedInUser")!)
      if(!user) {
        console.log("if");
        
        return true; 
      } else {
        console.log("else");
        alert("Make sure you logout first")
        this._router.navigate(['/profile']);
        return false;
      }
  }
  
}
