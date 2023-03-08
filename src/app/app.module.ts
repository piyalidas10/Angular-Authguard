import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogDirective } from './shared/components/dialog/dialog.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogService } from './shared/services/dialog/dialog.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    DialogComponent,
    DialogDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    DialogService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
