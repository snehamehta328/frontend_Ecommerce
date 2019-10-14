import { Component, OnInit } from '@angular/core';
import {GetUserService} from "../get-user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router,private service:GetUserService) { }

   ngOnInit() {

  }



}
