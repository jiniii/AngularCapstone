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
  productImage:any;
  products:any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private productSer: ProductService) { }

  ngOnInit(): void {
   this.getProduct();
   //this.getImage();
  }

  getProduct(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.productName = params.get('display');
    })
  }

  back() {
    this.route.navigate(['products']);
  }

  getImage(){
    this.productSer.getProduct().subscribe(data=>{
      for(let i =0 ;i< 6 ; i++){
        this.productImage = data[i]['src'];
      }
      console.log("image",this.productImage)
    })
  }

}
