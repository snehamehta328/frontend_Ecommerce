import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse} from "@angular/common/http";
import {posts} from './posts';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetUserService
{
  constructor(private httpClient: HttpClient) { }
  // post1_user(posts:posts)
  // {
  //   return this.http.post<any>('http://localhost:3030/users/post1',posts,{headers: new HttpHeaders({'Content-Type':'application/json'})});
  // }
  getProducts()
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/api/prodetails',{headers});
  }
  getProductsByRange(price1,price2)
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/api/getProductsByPrice/'+price1+'/between/'+price2,{headers});
  }
  getProductsByCategory(category: string)
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/api/getProductsByCategory/'+category,{headers});
  }
  getById(id)
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/api/par/'+id,{headers});
}
  addProductToCart(productid)
  {
    console.log(productid);
    const token= sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/addproduct/recieve/' + productid, {headers});
}
removeproduct(prodid)
{
  const token= sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/removeproduct/recieve/' + prodid, {headers});
}
deleteProduct(did)
{
  const token= sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/deleteproduct/recieve/' + did, {headers});
}
showCart()
{
  const token= sessionStorage.getItem('token');
  const headers=new HttpHeaders({ Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/showcart/recieve' , {headers});
}
clearCart()
{
  const token= sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/clearcart' , {headers});
}
checkout()
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpClient.get('http://localhost:4030/cart/checkout/recieve',{headers});
}

  getOrder()
  {
    const token=sessionStorage.getItem('token');
   // console.log(token);
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/order/orders',{headers});
  }
  totalPrice()
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.get('http://localhost:4030/cart/price',{headers});
  }
  addProduct(data)
  {
    const token=sessionStorage.getItem('token');
    console.log(token);
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.post("http://localhost:4030/api/insert",data,{headers});
  }
  editProduct(id,data)
  {
    const token=sessionStorage.getItem('token');
    console.log(token);
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpClient.put("http://localhost:4030/api/produc/"+id,data,{headers});
  }
}
