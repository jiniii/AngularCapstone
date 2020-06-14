import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../../services/alert.service'


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: any;
  productName: string;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    private proService: ProductService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log("productid",params)
      this.productId = params.get('id');
      // this.productName = params.get('display');
      console.log("deleted id", this.productId)
    })
  }

  delete() {
    this.proService.deleteProduct(this.productId).subscribe(data => {
      this.alertService.success('Your Product is Deleted Successfully', { keepAfterRouteChange: true });

    })
  }

  back() {
    this.route.navigate(['products']);
  }

}
