import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productImage: any;
  products: any;
  productId: any;

  /**
   * constructor that loads Router, ActivatedRoute, ProductService modules
   * @param router 
   * @param activatedRoute 
   * @param productSer 
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private productSer: ProductService) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.productImage = '';
    this.products = '';
    this.productId = '';
    this.getProduct();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.productImage = null;
    this.products = null;
    this.productId = null;
  }

  /**
   * used to get product id
   */
  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getDetails();
    })
  }

  /**
   * used to get product details
   */
  getDetails() {
    if ((this.router.url).includes("details")) {
      this.productSer.getProduct().subscribe(data => {
        this.products = data[this.productId];
        data[this.productId].watch = data[this.productId].watch + 1;
      },
        error => {
          console.log(error);
        })
    }
    else {
      this.productSer.getProduct().subscribe(data => {
        this.products = data[this.productId];
      },
        error => {
          console.log(error);
        })
    }

  }

  /**
   * to navigate back to products/details page based on condition
   */
  back() {
    if ((this.router.url).includes("details"))
      this.router.navigate(['/']);
    else
      this.router.navigate(['products']);
  }

  /**
   * to get images to be displayed in the product details
   */
  getImage() {
    this.productSer.getProduct().subscribe(data => {
      for (let i = 0; i < 6; i++) {
        this.productImage = data[i]['src'];
      }
    },
      error => {
        console.log(error);
      })
  }

}
