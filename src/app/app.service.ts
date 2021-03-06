import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  obj: object;


  constructor(private httpClient: HttpClient, private router:Router) {}
    isLoggedin(bool: boolean) {
      sessionStorage.setItem('auth',String(bool));
      return bool;
    }
    checkLogin()
    {
      const auth=sessionStorage.getItem('auth');
      return JSON.parse(auth);
    }
    checkLogOut()
    {
      sessionStorage.removeItem('username');
    }
    signup(user)
    {
      return this.httpClient.post('http://localhost:4030/login/addUser' ,user).subscribe(res=>
      this.router.navigate(['login']));
    }
    edit(bool:boolean)
    {
      localStorage.setItem('edit', String(bool));
      return bool;
    }
    // checkEdit()
    // {
    //   const edit=localStorage.getItem('edit');
    //   return JSON.parse(edit);
    // }
  }

