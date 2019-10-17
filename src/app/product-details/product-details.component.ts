import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {GetUserService} from "../get-user.service";
import {AppService} from "../app.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
Id: number;
product;
  constructor(private service:GetUserService, private router:Router,private activatedRoute:ActivatedRoute,private appservice:AppService) { }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) =>{
      this.Id=data.id;
    });
    return this.service.getById(this.Id).subscribe((data)=>{
      this.product=data;
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
  addProduct(pId)
  {
    this.service.addProductToCart(pId).subscribe((data) => {
    });
  }
  edit(productId)
  {
    this.appservice.edit(true);
    this.router.navigate(['/addProduct'],{
      relativeTo:this.activatedRoute,
      queryParams:{
        id:productId
      }
    });
  }
}
