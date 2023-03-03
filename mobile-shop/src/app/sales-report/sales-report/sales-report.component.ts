import {Component, ElementRef, OnInit} from '@angular/core';
import {SalesReportService} from "../../service/sales-report.service";
import {SalesReport} from "../../entity/sales-report";
import {Chart} from 'chart.js';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  @ViewChild('commodityId') commodityId!: ElementRef;

  revenues: number[] = [];
  dateBuy: string[] = [];
  showCommodityInput: boolean = false;
  sales: SalesReport;

  radioOptions: string = 'option1';

  constructor(private salesReportService: SalesReportService) {
  }

  toggleCommodityInput(option: string): void {
    this.showCommodityInput = this.radioOptions === 'option3';
    this.revenues = [];
    this.dateBuy = [];
  }

  ngOnInit(): void {
    this.toggleCommodityInput(this.radioOptions)
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total number of orders and total revenue per day
   * @param startDay: string
   * @param endDay: string
   */

  salesReport(startDay: string, endDay: string, radioOptions: string, commodityId: any) {
    if (radioOptions === 'option1') {

      this.salesReportService.salesReport(startDay.toString(), endDay.toString()).subscribe(data=>{
        this.sales = data;

      });

      this.salesReportService.getAll(startDay.toString(), endDay.toString()).subscribe(data=>{
        console.log(data)
        for (let i = 0; i < data.length; i++){
          // @ts-ignore
          this.revenues.push(data[i].revenue);
          console.log(data[i].revenue)
          // @ts-ignore
          this.dateBuy.push(data[i].buyDate);
        }
        this.drawChart(this.dateBuy,this.revenues)
      })
    }else if (radioOptions === 'option3') {
      this.salesReportService.salesReportById(startDay.toString(), endDay.toString(), +commodityId).subscribe(data=>{
        this.sales = data;
      });

      this.salesReportService.getAllById(startDay.toString(), endDay.toString(), +commodityId).subscribe(data=>{
        console.log(data)
        for (let i = 0; i < data.length; i++){
          // @ts-ignore
          this.revenues.push(data[i].revenue);
          console.log(data[i].revenue)
          // @ts-ignore
          this.dateBuy.push(data[i].buyDate);
        }
        console.log(this.revenues)
        console.log(this.dateBuy)
        this.drawChart(this.dateBuy,this.revenues)
      })
    }
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: initialize chart
   */
  drawChart(dateBuy: string[], revenues: number[]) {
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: dateBuy,
        datasets: [{
          label: 'Doanh thu',
          data: revenues,
          backgroundColor: 'rgba(255,255,0,0.28)',
          borderColor: 'black',
          borderWidth: 3,
        }],
      }
    })
  }


}
