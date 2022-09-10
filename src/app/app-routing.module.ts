import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { BackToLoginGuard } from './guards/back-to-login.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponentComponent,canActivate:[BackToLoginGuard]},
  {path:"profile",canActivate:[LoginGuardGuard],component:ProfileComponent,
children:[
  {path:"all-contacts",component:ContactTableComponent},
  {path:"add-contact",component:AddContactComponent},
  {path:"",component:ContactDetailsComponent},
  {path:"dashboard",component:ContactDetailsComponent},
  {path:"update-password",component:ChangePasswordComponent},
]},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
