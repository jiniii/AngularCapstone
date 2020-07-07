import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit, OnDestroy {

  productId: string;
  products: any;
  editProduct: FormGroup;
  submitted: boolean;
  images: any;

  /**
   * Constructor loads the Router,ActivatedRoute,ProductService,AlertService modules
   * @param route 
   * @param activatedRoute 
   * @param proService 
   * @param alertService 
   */
  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private proService: ProductService, private alertService: AlertService
  ) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.productId = '';
    this.submitted = false;
    this.products = '';
    this.editProduct = new FormGroup({
      productName: new FormControl(''),
      productDes: new FormControl(''),
      manufacturer: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
      mobileNum: new FormControl(''),
      src: new FormControl('')
    });;
    this.images   = [
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
    this.getProductId();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.productId = null;
    this.submitted = null;
    this.products = null;
    this.editProduct = null;
    this.images = null;
  }

  /**
   * getProductId(): Used To get the ProductId
   */
  getProductId() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProducts();
    })
  }

  /**
   * get f(): To get form control values
   */
  get f() { return this.editProduct.controls; }

  /**
   * getProducts(): Used to get the existing Product Details
   */
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

  /**
   * updateProduct(): Used to update the existing product
   */
  updateProduct() {
    this.submitted = true;
    if (this.editProduct.invalid) {
      return;
    } else {
      this.proService.update(this.productId, this.editProduct.value).subscribe(data => {
        this.alertService.success('Your Product is Updated Successfully', { keepAfterRouteChange: true });
      },
        error => {
          console.log(error);
        })
    }
  }

  /**
   * cancel(): To navigate back to the products page
   */
  cancel() {
    this.route.navigate(['products']);
  }
}
