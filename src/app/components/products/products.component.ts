import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.proService.getProduct().subscribe(data => {
      this.products = data;
      console.log("products",this.products)
    })
  }
  
  // delete(id) {
  //   this.proService.deleteProduct(id).subscribe(data=>{
  //     console.log("deleted item",data);
  //     this.getDetails();

  //   })
  // }
}
