import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAIN_ROUTES} from './app.route';
import {SignUpComponent} from "./sign-up/sign-up.component";
import{LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
