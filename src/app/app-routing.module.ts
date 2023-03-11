import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
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
  },
  {
    path: 'wlcome',component:WelcomeComponent,
  },
  {
    path:'unlockAcc',component:UnlockAccountComponent
  },
  



  
  {
    path:'**',component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
