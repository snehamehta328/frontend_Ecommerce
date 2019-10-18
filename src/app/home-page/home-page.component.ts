import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetUserService} from "../get-user.service";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   products;
   category;

  constructor(private router: Router,private service: GetUserService, private appservice: AppService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data9)=>
    {
      this.products=data9;
    });
  }
goToPriceRange($event,number1: number,number2: number)
{
  this.service.getProductsByRange(number1,number2).subscribe((data)=>{
    this.products=data;
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
  // showHomePage()
  // {
  //   this.category="Home";
  //   this.service.getProductsByCategory('Home').subscribe((data5)=>{
  //     this.products=data5;
  //   });
  // }
  goToProduct(id:number)
  {
    this.router.navigate(['/productdetails'],{queryParams:{id}});
  }
addProduct(pId)
{
  this.service.addProductToCart(pId).subscribe((data) => {
  });
  alert('Product added to cart');
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
