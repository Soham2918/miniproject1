import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'unlock',component:UnlockAccountComponent
  },
  {
    path:'signin',component:SignInComponent,
  },
  {
    path:'registration',component:RegistrationComponent,
  },
  {
    path:'forgetPwd',component:ForgetpwdComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
