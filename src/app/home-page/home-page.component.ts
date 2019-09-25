import { Component, OnInit } from '@angular/core';
import {productitem} from "../product-details/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products = productitem;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDetails(id)
  {
    this.router.navigate(['/product-info'],{ queryParams:{id: 1}});
  }
}
