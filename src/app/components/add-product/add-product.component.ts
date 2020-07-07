import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addProducts: FormGroup;
  submitted: boolean;
  images: any;

  constructor(private route: Router,
    private myService: ProductService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.submitted = false;
    this.images = [
      "assets/technospark.jpg",
      "assets/lenovos60.jpg",
      "assets/samsung galaxyM21.jpg",
      "assets/oneplus85G.jpg",
      "assets/oneplus7T.jpg",
      "assets/viviU10.jpg",
      "assets/redminote8.jpg",
      "assets/redminote9pro.jpg",
      "assets/samsunggalaxym31.jpg",
      "assets/SamsungM30.jpg",
      "assets/samsungM30s.jpg",
      "assets/samsungM40.jpg",
      "assets/OppoA31.jpg",
      "assets/OPPOF15.jpg",
      "assets/OppoReno3.jpg"
    ];
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

  /**
  * ngOnDestroy(): To Destroy all the declared variables
  */
  ngOnDestroy() {
    this.images = null;
    this.submitted = null;
    this.addProducts = null;
  }

  /**
   * get f(): convenience getter for easy access to form fields
   */
  get f() { return this.addProducts.controls; }

  /**
   * to submt the newly added product
   */
  Product() {
    this.submitted = true;
    if (this.addProducts.invalid) {
      return;
    } else {
      this.myService.addProduct(this.addProducts.value).subscribe(data => {
        this.alertService.success('Your Product is Added Successfully', { keepAfterRouteChange: true });
      },
        error => {
          console.log(error);
        })
    }
  }

  /**
   * to navigate back to products page
   */
  cancel() {
    this.route.navigate(['products']);
  }
}
