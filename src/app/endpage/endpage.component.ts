import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.scss']
})
export class EndpageComponent implements OnInit {
cart;
  constructor(private router:Router,private appservice:AppService) { }

  ngOnInit() {
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
}
