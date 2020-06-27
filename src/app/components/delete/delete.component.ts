import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: any;
  productName: string;
  products: any;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    private proService: ProductService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getProduct();
    this.getDetails();
  }
  
  getProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
    })
  }

  delete() {
    let c = confirm("Are you Sure? Do you want to Delete this Product")
    if (c == true) {
      this.proService.deleteProduct(this.productId).subscribe(data => {
        this.alertService.success('Your Product is Deleted Successfully', { keepAfterRouteChange: true });
      })
    } else {
      this.back();
    }

  }
  getDetails() {
    this.proService.getProduct().subscribe(data => {
      this.products = data[this.productId];
    })

  }

  back() {
    this.route.navigate(['products']);
  }

}
