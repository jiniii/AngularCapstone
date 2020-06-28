import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products: Products[];

  /**
   * constructor to load proService module
   * @param proService 
   */
  constructor(private proService: ProductService) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.products= [];
    this.getDetails();
  }
  
  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy(){
    this.products= null;
  }

  /**
   * getDetails(): To get Product Details
   */
  getDetails() {
    this.proService.getProduct().subscribe((product) => {
      this.products = product;
    })

  }
}
