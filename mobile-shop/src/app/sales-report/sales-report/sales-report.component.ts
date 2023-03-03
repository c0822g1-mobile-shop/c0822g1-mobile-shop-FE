import { Component, OnInit } from '@angular/core';
import {SalesReportService} from "../../service/sales-report.service";
import {SalesReport} from "../../entity/sales-report";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  revenues: number[] = [];
  dateBuy: string[] = [];

  sales: SalesReport;

  constructor(private salesReportService: SalesReportService) {
  }

  ngOnInit(): void {
  }



  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total number of orders and total revenue per day
   * @param startDay: string
   * @param endDay: string
   */
  salesReport(startDay: string, endDay: string) {
    this.salesReportService.salesReport(startDay, endDay).subscribe(data=>{
      this.sales = data;
    });

    this.salesReportService.listReport(startDay, endDay).subscribe(data=>{
      for (let i = 0; i < data.length; i++){
        // @ts-ignore
        this.revenues.push(data[i].revenue);
        console.log(data[i].revenue)
        // @ts-ignore
        this.dateBuy.push(data[i].buyDate);
      }
      console.log(this.revenues)
      console.log(this.dateBuy)
      this.drawChart()
    })
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: initialize chart
   */
  drawChart(){
    new Chart('myChart',{
      type: 'bar',
      data:{
        labels: this.dateBuy,
        datasets:[{
          label:'Doanh thu',
          data: this.revenues,
          backgroundColor: 'rgba(255,255,0,0.28)' ,
          borderColor: 'black',
          borderWidth: 3,
        }],
      }
    })
  }
}
