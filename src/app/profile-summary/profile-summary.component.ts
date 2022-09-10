import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {

  constructor() { }

  phone=""
  dob=""

  ngOnInit(): void {
    let user =JSON.parse(localStorage.getItem("loggedInUser")!)
    this.phone=user.phone;
    this.dob=user.birthday;
  }

}
