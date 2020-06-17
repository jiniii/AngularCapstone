import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/home.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  constructor(private proService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.proService.getHomeProduct().subscribe(data => {
      this.products = data;
      console.log("products", data)
    })
  }
}
