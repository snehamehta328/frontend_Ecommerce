import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import {MyProfileService} from "../my-profile.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
username;
password;
myp;

  constructor(private http:HttpClient,private authService:AuthenticationService, private router:Router, private appservice:AppService,private abc:MyProfileService) { }
disabled=true;
  url='http://localhost:4040/profile/update';
  ngOnInit() {
    this.abc.getProfile().subscribe(data =>
    {
      this.myp=data;
    });
  }
  showCart()
  {
    this.router.navigate(['/cart']);
  }
  logout()
  {
    this.appservice.isLoggedin(false);
    this.router.navigate(['login']);
  }
  edit()
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization: 'Basic '+ token});
    return this.http.put(this.url, this.myp,{headers}).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/myprofile']);
    });
  }
}
