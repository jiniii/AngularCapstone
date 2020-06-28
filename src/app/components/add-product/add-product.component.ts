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

  Images: any= [
    "assets/technospark.jpg",
    "assets/lenovos60.jpg",
    "assets/samsung galaxyM21.jpg",
    "assets/oneplus85G.jpg",
    "assets/viviU10.jpg",
    "assets/redminote8.jpg",
    "assets/samsunggalaxym31.jpg"
  ];

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
      src: ['', Validators.required],
    });;
  }
  get f() { return this.addProducts.controls; }

  Product() {
    this.submitted = true;
    if (this.addProducts.invalid) {
      console.log("form is not valid")
      return ;
    } else{
      console.log("form values for add product",this.addProducts.value)
      this.myService.addProduct(this.addProducts.value).subscribe(data =>{
        this.alertService.success('Your Product is Added Successfully', { keepAfterRouteChange: true });
      },
      error =>{
        console.log(error);
      })
    }
     
   }
   cancel() {
    this.route.navigate(['products']);
  }
}
