import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  constructor(private _userAuth:UserAuthService) { 
    
    
  }
  
  ngOnInit(): void {
    let loggedInUser=JSON.parse(localStorage.getItem("loggedInUser")!)
    this.user=loggedInUser
    this.contacts=loggedInUser.contacts
    this.filteredArr=this.contacts;
  }
user:any
  contacts  :{name:string,phone:string}[]=[]


  filteredArr:any

  

  handleDelete(phone:any){
    let res=confirm (`Are you sure you want to delete this contact`)
    if (res) {
      
      this.user.contacts=this.user.contacts.filter((e:any)=>e.phone!=phone)
      this.contacts=this.user.contacts
      this.filteredArr=this.filteredArr.filter((e:any)=>e.phone!=phone)
      this.filteredArr=this.user.contacts

      localStorage.setItem("loggedInUser",JSON.stringify(this.user))
  
      console.log(this.user);
      this._userAuth.update(this.user.id,this.user).subscribe({
        next:(data)=>data
      })
    }


    
  }

  filterContacts(val:any){
    this.filteredArr=this.contacts
    this.filteredArr=this.filteredArr.filter((e:any)=>{
      return e.name.toLowerCase().includes(val.toLowerCase())
    })
  }


  sortAtoZ() :any{
    this.filteredArr.sort((a:any,b:any)=>{
        let fn1=a.name;
        let fn2=b.name;

        if (fn1<fn2) {
          return -1
        }
        else if(fn1>fn2){
          return 1
        }
        else{
          return 0
        }
    })
  }
  sortZtoA() :any{
    this.filteredArr.sort((a:any,b:any)=>{
        let fn1=a.name;
        let fn2=b.name;

        if (fn1<fn2) {
          return 1
        }
        else if(fn1>fn2){
          return -1
        }
        else{
          return 0
        }
    })
  }
}
