import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/user.model'
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName: string = "";
  productDes: string = "";
  productManu: string = "";
  productQuan: string = "";
  productPrice: string = "";
  products: Products[];

  constructor(private route: Router,
    private myService: ProductService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.productName != "" && this.productDes != "" && this.productManu != "" && this.productQuan != "" && this.productPrice != "") {
      this.myService.addProduct(this.productName, this.productDes, this.productManu, this.productQuan, this.productPrice).subscribe(data => {
        this.alertService.success('Your Product is Added Successfully', { keepAfterRouteChange: true });
      });
    }
    else
      this.alertService.error('Fields cannot be empty!', { keepAfterRouteChange: true });
  }

  back() {
    this.route.navigate(['products']);
  }
}
