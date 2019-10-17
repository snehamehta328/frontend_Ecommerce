import { Component, OnInit } from '@angular/core';
import {GetUserService} from "../get-user.service";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
cart;
  constructor(private service: GetUserService,private router:Router,private appservice:AppService) { }

  ngOnInit() {
    return this.service.getOrder().subscribe((data) => {
      this.cart = data;
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

}
