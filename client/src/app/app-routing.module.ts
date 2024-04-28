import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './createaccount/createaccount.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';
import { CreateformationComponent } from './formation/createformation/createformation.component';
import { FormationComponent } from './formation/formation.component';
import { CertificationComponent } from './certification/certification.component';
import { GererComponent } from './certification/gerer/gerer.component';
import { CertificationViewComponent } from './certification-view/certification-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'update/user/:id',canActivate:[AuthGuard],component:CreateAccountComponent},
  {path:'formation/create',canActivate:[AuthGuard],component:CreateformationComponent},
  {path:'formation/update/:id',canActivate:[AuthGuard],component:CreateformationComponent},
  {path:'formation',canActivate:[AuthGuard],component:FormationComponent},
  {path:'certification',canActivate:[AuthGuard],component:CertificationComponent},
  {path:'certification/update/:id',canActivate:[AuthGuard],component:GererComponent},
  {path:'certification/view',canActivate:[AuthGuard],component:CertificationViewComponent},
  {path:'users',canActivate:[AuthGuard],component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:CreateAccountComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
