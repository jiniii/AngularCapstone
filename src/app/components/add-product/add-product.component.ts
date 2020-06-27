import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProducts: FormGroup;
  submitted = false;

  constructor(private route: Router,
    private myService: ProductService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.addProducts = this.formBuilder.group({
      productName: ['', Validators.required],
      productDes: ['', Validators.required],
      manufacturer: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      mobileNum: ['', [Validators.required, Validators.minLength(10)]],
      src: ['assets/', Validators.required],
    });;
  }
  get f() { return this.addProducts.controls; }

  Product() {
    this.submitted = true;
      this.myService.addProduct(this.addProducts.value).subscribe(data =>{
        this.alertService.success('Your Product is Added Successfully', { keepAfterRouteChange: true });
      })
   }
   cancel() {
    this.route.navigate(['products']);
  }
}
