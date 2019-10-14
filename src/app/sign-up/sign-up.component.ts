import { Component, OnInit } from '@angular/core';
import {GetUserService} from "../get-user.service";
import {posts} from "../posts";
import {AuthenticationService} from "../authentication.service";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 username;
 password;
yourname;
email;
phone;
  constructor(private authService: AuthenticationService, private appService: AppService, private router: Router) { }

  ngOnInit() {
  }
 goTosignUp()
 {
   const user= {
     username:this.username,
     password:this.password,
     yourname:this.yourname,
     email:this.email,
     phone:this.phone
   };
   this.appService.signup(user);
 }
}
