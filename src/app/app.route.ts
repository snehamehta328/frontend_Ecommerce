import{Routes} from '@angular/router';
import{HomePageComponent} from "./home-page/home-page.component";
import{UserCartComponent} from "./user-cart/user-cart.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import{ProductInformationComponent} from "./product-information/product-information.component";

export const MAIN_ROUTES:Routes=[
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'homepage',component: HomePageComponent },
  {path: 'product-info',component:ProductInformationComponent},
  {path:'cart',component:UserCartComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**',component:LoginComponent}
];
