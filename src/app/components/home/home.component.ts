import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: any;

  /**
   * constructor that loads ProductService module
   * @param proService 
   */
  constructor(private proService: ProductService) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.products = [];
    this.getDetails();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy(){
    this.products= null;
  }

  /**
   * to get product details
   */
  getDetails() {
    this.proService.getProduct().subscribe(data => {
      this.products = data;
    },
    error =>{
      console.log(error);
    })
  }
}
