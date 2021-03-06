import{Routes} from '@angular/router';
import{HomePageComponent} from "./home-page/home-page.component";
import{UserCartComponent} from "./user-cart/user-cart.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {EndpageComponent} from "./endpage/endpage.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";
import {AddeditproductComponent} from "./addeditproduct/addeditproduct.component";

export const MAIN_ROUTES:Routes=[
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'homepage',component: HomePageComponent },
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'cart',component:UserCartComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'endpage',component:EndpageComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'orderhistory',component:OrderhistoryComponent},
  {path:'addProduct',component:AddeditproductComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**',component:LoginComponent}
];
