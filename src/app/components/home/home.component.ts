import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.proService.getProduct().subscribe(data => {
      this.products = data;
    },
    error =>{
      console.log(error);
    })
  }
}
