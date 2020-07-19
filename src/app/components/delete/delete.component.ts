import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit, OnDestroy {
  productId: any;
  productName: string;
  products: any;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    public proService: ProductService,
    private alertService: AlertService) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.productId = '';
    this.productName = '';
    this.products = [];
    this.getProduct();
    this.getDetails();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.productId = null;
    this.productName = null;
    this.products = null;
  }

  /**
   * to product id
   */
  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
    })
  }

  /**
   * to delete a product based on productID
   */
  delete() {
    let c = confirm("Are you Sure? Do you want to Delete this Product")
    if (c == true) {
      this.proService.deleteProduct(this.productId).subscribe(data => {
        this.alertService.success("Your Product is Deleted Successfully", { keepAfterRouteChange: true });
      },
        error => {
          console.log(error);
        })
    } else {
      this.back();
    }
  }

  /**
   * to get the product details
   */
  getDetails() {
    this.proService.getProduct().subscribe(data => {
      this.products = data[this.productId];
    },
      error => {
        console.log(error);
      })
  }

  /**
   * to navigate back to products page
   */
  back() {
    this.route.navigate(['products']);
  }

}
