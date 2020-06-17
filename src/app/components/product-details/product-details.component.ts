import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productName: any;
  productImage: any;
  products: any;
  productId: any;
  productdetails: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private productSer: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
    //this.getImage();
  }

  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getDetails();
    })
  }
  getDetails() {
    if ((this.router.url).includes("details")){
      this.productSer.getHomeProduct().subscribe(data => {
        this.products = data[this.productId];
      })
    }
    else {
      this.productSer.getProduct().subscribe(data => {
        this.products = data[this.productId];
    })}
 
  }
  back() {
    if ((this.router.url).includes("details"))
      this.router.navigate(['/']);
    else
      this.router.navigate(['products']);
  }

  getImage() {
    this.productSer.getProduct().subscribe(data => {
      for (let i = 0; i < 6; i++) {
        this.productImage = data[i]['src'];
      }
      console.log("image", this.productImage)
    })
  }

}
