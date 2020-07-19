import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Products } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';

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
      for (let i = 0; i < 5; i++) {
        this.products.push(data[i]);
        this.productName.push(data[i].productName)
        this.watch.push(data[i].watch)
      }
    });
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
