import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http:HttpClient) { }
  authenticate(username, password){
   // const token=sessionStorage.getAlldetails('token');
    const headers=new HttpHeaders({ Authorization: 'Basic '+ btoa(username + ':' + password)});
    return this.http.get('http://localhost:4030/api/prodetails',{headers}).pipe(
      map(data=> {
        sessionStorage.setItem('token', btoa(username + ':' + password));
        return data;
      }

      ));
  }
  // isUserLoggedIn()
  // {
  //   const user=sessionStorage.getItem('username');
  //   console.log(!(user===null));
  //   return !(user===null);
  // }
  // logOut()
  // {
  //   sessionStorage.removeItem('username');
  // }
}
