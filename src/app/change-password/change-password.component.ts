import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _userAuth:UserAuthService,private _router:Router) { }

  user:any;

  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem("loggedInUser")!);
    this.user=user;
  }


  changePass=this._builder.group({
    oldpass:['',Validators.required],
    password:['',Validators.required]
  })

  display=true;
  handleSubmit(){
    console.log("called");
    

    if (this.changePass.valid) {
      if (this.user.password===this.changePass.value.oldpass) {
        this.user.password=this.changePass.value.password?.toString();
        console.log(this.user.password);
        
        this._userAuth.update(this.user.id,this.user).subscribe({
          next:(data)=>{
            return data;
          }
        })
        
        this.display=!this.display;
        setTimeout(() => {
          this.display=!this.display;
          this._router.navigate(['/profile/dashboard'])
          
        }, 2000);
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("err")
    }
  }
}
