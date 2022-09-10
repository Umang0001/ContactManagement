import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _userAuth:UserAuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerForm=this._builder.group({
    id:[],
    name:['',Validators.required],
    password:['',Validators.required],
    phone:['',Validators.required],
    birthday:['',Validators.required],
    contacts:[[]]
  })

  invalid=false

  handleRegister(){
    this.invalid=false;
    if (this.registerForm.valid) {
      this._userAuth.register(this.registerForm.value).subscribe({
        next:(data)=>{

          this._router.navigate([''])
        }
      });
      
      
    }
    else{
      this.invalid=true;
      // this.registerForm.reset();

    }
  }

}
