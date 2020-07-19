import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProductService } from 'src/app/services/product.service';
import { Products, ChartProduct } from 'src/app/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  products: Products[] = [];
  watch = [];
  productName = []
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.service.getProduct().subscribe((data) => {
      data.sort(this.GetSortOrder("watch"));
      console.log("sorted data", data)
      let watch = data.map(data => data.watch);
      let productName = data.map(data => data.productName);
      console.log("watch", watch, "productName", productName);

      for (let i = 0; i < 5; i++) {
        this.products.push(data[i]);
        console.log("top products", this.products);
        this.productName.push(data[i].productName)
        this.watch.push(data[i].watch)
      }
    },
      (err: HttpErrorResponse) => {
        // console.log(err.message);
      })
    console.log("top productName", this.productName, this.watch);
    this.barChartLabels = this.productName;
    this.barChartData = [{ data: this.watch, label: 'Top 5' }]

  }

  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    }
  }

}
