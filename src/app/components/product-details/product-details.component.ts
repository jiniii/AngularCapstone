import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { CartService } from 'src/app/services/cart.service';
import { Products } from 'src/app/models/user.model';
import { MessengerService } from 'src/app/services/messenger.service';


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
    private productSer: ProductService,private cartService: CartService,private msg: MessengerService, ) { }

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
    })
  }
    
  buy(){
    confirm("Thanks for the Purchase! your Product will be delivered to your address.")
  }

}
