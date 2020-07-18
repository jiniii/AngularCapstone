import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Top 3' },
    { data: [28, 48, 40, 19, 80, 27, 70], label: 'Top 5' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Top 10' },
  ];
  products: Products[];
  constructor(private service: ProductService) { }

  ngOnInit() {

  }

  getDetails() {
    this.service.getProduct().subscribe((product) => {
      this.products = product;
    })
  }

}
