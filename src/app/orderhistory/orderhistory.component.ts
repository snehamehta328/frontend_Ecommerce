import { Component, OnInit } from '@angular/core';
import {GetUserService} from "../get-user.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
cart;
  constructor(private service: GetUserService) { }

  ngOnInit() {
    return this.service.getOrder().subscribe((data) => {
      this.cart = data;
    });
  }

}
