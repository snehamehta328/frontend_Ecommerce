import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EndpageComponent } from './endpage/endpage.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NavBarComponent,
    ProductDetailsComponent,
    SignUpComponent,
    UserCartComponent,
    MyprofileComponent,
    MainpageComponent,
    EndpageComponent,
    OrderhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
