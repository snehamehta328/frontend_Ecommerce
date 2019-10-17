import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetUserService} from "../get-user.service";
import {AppService} from "../app.service";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
   category;
   products;
cart;
total;

  constructor(private router: Router,private service: GetUserService,private appservice: AppService) { }

  ngOnInit() {
    return this.service.showCart().subscribe((data) => {
      this.cart=data;
      this.findtotal();
    });
  }
  showClothing()
  {
    this.category="Clothing";
    this.service.getProductsByCategory('Clothing').subscribe((data1)=>{
      this.products=data1;
    });
  }
  showElectronics()
  {
    this.category="Electronics";
    this.service.getProductsByCategory('Electronics').subscribe((data2)=>{
      this.products=data2;
    });
  }
  showSports()
  {
    this.category="Sports";
    this.service.getProductsByCategory('Sports').subscribe((data3)=>{
      this.products=data3;
    });
  }
  showBooks()
  {
    this.category="Books";
    this.service.getProductsByCategory('Books').subscribe((data4)=>{
      this.products=data4;
    });
  }
  showHomePage()
  {
    this.category="Home";
    this.service.getProductsByCategory('Home').subscribe((data5)=>{
      this.products=data5;
    });
  }
  deleteProduct(did: number){
    this.service.deleteProduct(did).subscribe((data) =>{
      this.service.showCart().subscribe((data6) => {
        this.cart=data6;
        this.findtotal();
      });
    });
  }
  decreaseproduct(rid: number)
  {
    this.service.removeproduct(rid).subscribe((data) => {
      this.service.showCart().subscribe((data2) => {
        this.cart=data2;
        this.findtotal();
      });
    });
  }
  increaseproduct(aid: number)
  {
    this.service.addProductToCart(aid).subscribe((data) => {
      this.service.showCart().subscribe((data3) => {
        this.cart=data3;
        this.findtotal();
      });
    });
  }
  checkOut(){
    this.service.checkout().subscribe((data1) => {
      this.total=data1;
    });
  }
  // clearcart(){
  //   this.service.checkout().subscribe((data1) => {
  //     this.total=data1;
  //   });
  // }
  // clearcart()
  // {
  //   this.service.clearCart().subscribe((data) => {
  //     this.service.showCart().subscribe((data3) => {
  //       this.cart=data3;
  //     });
  //   });
  // }
  clearcart()
  {

    this.service.clearCart().subscribe((data) => {

    });
    this.router.navigate(['/endpage']);
  }
  logout()
  {
    this.appservice.isLoggedin(false);
    this.router.navigate(['login']);
  }
  totalPrice()
  {
    this.service.totalPrice().subscribe((data) =>{
      this.total=data;
    });
  }
  findtotal()
  {
    this.total=0;
    for(let i=0;i<this.cart.length;i++)
    {
      this.total+=this.cart[i].products.price*this.cart[i].quantity;
    }
    console.log(this.total);
  }
}
