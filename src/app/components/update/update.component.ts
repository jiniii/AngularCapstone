import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  submitted: boolean = false;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private proService: ProductService, private alertService: AlertService
    ) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProducts();
    })
  }
  get f() { return this.editProduct.controls; }

  getProducts() {
    this.proService.getProduct().subscribe(data => {
      this.products = data[this.productId];
        this.editProduct = new FormGroup({
          productName: new FormControl(this.products.productName, Validators.required),
          productDes: new FormControl(this.products.productDes, Validators.required),
          manufacturer: new FormControl(this.products.manufacturer, Validators.required),
          quantity: new FormControl(this.products.quantity, Validators.required),
          price: new FormControl(this.products.price, Validators.required),
          mobileNum: new FormControl(this.products.mobileNum, [Validators.required, Validators.minLength(10)]),
          src: new FormControl(this.products.src, Validators.required)

        });
      })
  }

  updateProduct() {
    this.submitted = true;
    if (this.editProduct.invalid) {
      console.log("form is not valid")
      return ;
    } else{
      this.proService.update(this.productId, this.editProduct.value).subscribe(data => {
        this.alertService.success('Your Product is Updated Successfully', { keepAfterRouteChange: true });
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
