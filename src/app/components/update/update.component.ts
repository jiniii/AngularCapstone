import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editProduct= new FormGroup({
    productName: new FormControl(''),
    productDes: new FormControl(''),
    manufacturer: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    mobileNum: new FormControl(''),
    src: new FormControl('')
  });;
  productId: string;
  products: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private proService: ProductService, private alertService: AlertService
    ) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProducts();
    })
  }

  getProducts() {
    this.proService.getProduct().subscribe(data => {
      this.products = data[this.productId];
        this.editProduct = new FormGroup({
          productName: new FormControl(this.products.productName),
          productDes: new FormControl(this.products.productDes),
          manufacturer: new FormControl(this.products.manufacturer),
          quantity: new FormControl(this.products.quantity),
          price: new FormControl(this.products.price),
          mobileNum: new FormControl(this.products.mobileNum),
          src: new FormControl(this.products.src)

        });
      })
  }

  updateProduct() {
    this.proService.update(this.productId, this.editProduct.value).subscribe(data => {
      this.alertService.success('Your Product is Updated Successfully', { keepAfterRouteChange: true });
    })
  }

  cancel() {
    this.route.navigate(['products']);
  }
}
