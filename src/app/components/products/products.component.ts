import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Products } from 'src/app/models/user.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private proService: ProductService, ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.proService.getProduct().subscribe((product) => {
      this.products = product;
    })

  }
}
