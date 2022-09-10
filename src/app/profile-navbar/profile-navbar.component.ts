import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  constructor(private _router :Router,private _userService:UserAuthService) { }
user:any
  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem("loggedInUser")!)
    this.user=user
  }

  handleLogout(){
    localStorage.removeItem("loggedInUser");
    this._router.navigate(['/'])
  }

  handleDelete(){
    let res=confirm("Are you sure you want to delete your profile");
    if (res) {
      let res1=confirm("ek baar fir soch le");
      if (res1) {
        this._userService.delete(this.user.id).subscribe({
          next:data=>data
        })

        this._router.navigate([''])
        
      }
    }

  }

}
