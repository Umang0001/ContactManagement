import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileNavbarComponent,
    ProfileSummaryComponent,
    ContactDetailsComponent,
    ContactTableComponent,
    AddContactComponent,
    ChangePasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
