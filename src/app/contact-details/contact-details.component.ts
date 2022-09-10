import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let loggedInUser=JSON.parse(localStorage.getItem("loggedInUser")!)
    this.username=loggedInUser.name;
    this.totalContacts=loggedInUser.contacts.length
  }
  totalContacts=0
  username :string =""


}
