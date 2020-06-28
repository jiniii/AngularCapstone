import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productItem: Products;
  productName: any;
  productImage: any;
  products: any;
  productId: any;
  productdetails: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private productSer: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getDetails();
    })
  }
  getDetails() {
    if ((this.router.url).includes("details")) {
      this.productSer.getProduct().subscribe(data => {
        this.products = data[this.productId];
      },
      error =>{
        console.log(error);
      })
    }
    else {
      this.productSer.getProduct().subscribe(data => {
        this.products = data[this.productId];
      },
      error =>{
        console.log(error);
      })
    }

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
    },
    error =>{
      console.log(error);
    })
  }

  buy() {
    //functionality need to be added, need to send the purchased product to 
    //server and if any item in cart list should be removed
    confirm("Thanks for the Purchase! your Product will be delivered to your address.")
  }

}
