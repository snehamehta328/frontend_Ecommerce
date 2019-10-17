import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpService} from "../http.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {GetUserService} from "../get-user.service";
import {AppService} from "../app.service";

@Component({
  selector: 'app-addeditproduct',
  templateUrl: './addeditproduct.component.html',
  styleUrls: ['./addeditproduct.component.scss']
})
export class AddeditproductComponent implements OnInit {
product1;
name2;
category;
image;
price;
pid;
// url='http://localhost:4030/api/produc/';
  constructor(private service:GetUserService,private router:Router,private http:HttpClient,private route:ActivatedRoute,private appservice:AppService) { }
update(value:any)
{
  this.name2=value;
  console.log(this.name2);
}
  update2(value:any)
  {
    this.price=value;
  }
  update3(value:any)
  {
    this.category=value;
  }
  update4(value:any)
  {
    this.image=value;
  }
  update5(value:any)
  {
    this.pid=value;
  }
  ngOnInit() {
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   const id=parseInt(params.get('productid'));
    //   this.pid=id;
    // });
    this.service.getProducts().subscribe((data) =>
    {
      this.product1=data;
    });
  }
  get()
  {
    this.router.navigate(['/homepage']);
  }
addproduct()
{
  const json={
    name:this.name2,
    category:this.category,
    image:this.image,
    price:this.price,
    id:this.pid,
    active:1,
  };
  console.log(json);
  this.router.navigate(['/homepage']);
  this.service.addProduct(json).subscribe((data)=>{

  });
}
// editproduct() {
//   const json={
//     name:this.name2,
//     category:this.category,
//     image:this.image,
//     price:this.price,
//     id:this.id,
//     active:1
//   };
//   console.log(json);
//     this.router.navigate(['/homepage']);
//     this.service.editProduct(json).subscribe((data)=>
//     {
//   });
// }
//   editproduct()
//   {
//     const token=sessionStorage.getItem('token');
//     const headers=new HttpHeaders({Authorization: 'Basic '+ token});
//     return this.http.put(this.url, this.product1,{headers}).subscribe(data=>{
//       console.log(data);
//       this.router.navigate(['/homepage']);
//     });
//   }
//   edit() {
//     this.service.editProduct( {
//       name:this.name2,
//     category:this.category,
//     image:this.image,
//     price:this.price,
//     id:this.id,
//     active:1
//     }).subscribe((data) => {
//       localStorage.removeItem('edit');
//       this.router.navigate(['/homepage'], {
//         queryParams: {
//           id: this.id
//         }
//       });
//     });
//   }
//   edit() {
//     this.service.editProduct(this.pid).subscribe((data) => {
//       localStorage.removeItem('edit');
//       this.router.navigate(['productdetails'], {
//         queryParams: {
//           id: this.pid
//         }
//       });
//     });
//   }
  edit() {
    this.service.editProduct(this.pid, {
      name:this.name2,
      category:this.category,
      image:this.image,
      price:this.price,
      id:this.pid,
      active:1,
    }).subscribe((data) => {
      localStorage.removeItem('edit');
      this.router.navigate(['productdetails'], {
        queryParams: {
          id: this.pid
        }
      });
    });
  }
}
