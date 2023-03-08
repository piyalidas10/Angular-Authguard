import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { ConfirmationModalGuard } from "./registration/cofirmation-modal-guard/cofirmation-modal.guard";
import { RegistrationComponent } from "./registration/registration/registration.component";

const routes: Routes = [
    { 
        path: 'login',
        component: LoginComponent,
    },
    { 
           path: 'registration',
           component: RegistrationComponent,
           canDeactivate: [ConfirmationModalGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }  
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule{ } 