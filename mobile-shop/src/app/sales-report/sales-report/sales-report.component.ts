import {Component, ElementRef, OnInit} from '@angular/core';
import {SalesReportService} from "../../service/sales-report.service";
import {SalesReport} from "../../entity/sales-report";
import Swal from 'sweetalert2';

import {Chart} from 'chart.js';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {CommodityService} from "../../service/commodity.service";
import {Commodity} from "../../entity/commodity";

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  private chart: Chart;

  revenues: number[] = [];

  dateBuy: string[] = [];

  showCommodityInput: boolean = false;

  sales: SalesReport;

  reportForm: FormGroup;

  radioOptions: string = 'option1';

  listCommodity: Commodity[];

  constructor(private salesReportService: SalesReportService,
              private commodityService: CommodityService) {
    this.commodityService.getAll2().subscribe(data=>{
      this.listCommodity = data;
    })
    this.reportForm = new FormGroup({
      startDay: new FormControl("",[Validators.required]),
      endDay: new FormControl("",[Validators.required]),
      commodityId: new FormControl("",[Validators.required])
    });
    this.reportForm.setValidators(this.dateRangeValidator.bind(this.reportForm));
  }

  dateRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const startDay = control.get('startDay').value;
    const endDay = control.get('endDay').value;

    if (startDay && endDay && new Date(startDay) > new Date(endDay)) {
      return { 'invalidRange': true };
    }
    return null;
  }


  toggleCommodityInput(option: string): void {
    const commodityIdControl = this.reportForm.get('commodityId');
    if (option === 'option3') {
      this.showCommodityInput = true;
      this.radioOptions = option;
      commodityIdControl.enable();

    } else {
      this.showCommodityInput = false;
      this.radioOptions = option;
      commodityIdControl.disable();
    }
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

  salesReport(startDay: string, endDay: string) {
    this.revenues = [];
    this.dateBuy = [];
    this.drawChart(this.dateBuy,this.revenues);
    const commodityId = this.reportForm.controls['commodityId'].value;
    if (this.radioOptions === 'option1') {
      this.salesReportService.salesReport(startDay.toString(), endDay.toString()).subscribe(data=>{
        this.sales = data;
      });
      this.salesReportService.getAll(startDay.toString(), endDay.toString()).subscribe(data=>{
        console.log(data)
        for (let i = 0; i < data.length; i++){
          this.revenues.push(data[i].revenue);
          console.log(data[i].revenue)
          this.dateBuy.push(data[i].buyDate);
        }
        this.drawChart(this.dateBuy,this.revenues)
      })
    }else if (this.radioOptions === 'option3') {
      this.salesReportService.salesReportById(startDay.toString(), endDay.toString(), +commodityId).subscribe(data=>{
        this.sales = data;
      });
      this.salesReportService.getAllById(startDay.toString(), endDay.toString(), +commodityId).subscribe(data=>{
        console.log(data)
        for (let i = 0; i < data.length; i++){
          this.revenues.push(data[i].revenue);
          console.log(data[i].revenue)
          this.dateBuy.push(data[i].buyDate);
        }
        console.log(this.revenues)
        console.log(this.dateBuy)
        this.drawChart(this.dateBuy,this.revenues)
      },error=>{
        Swal.fire('', 'M?? s???n ph???m n??y kh??ng t???n t???i', 'error');
      })
    }
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: initialize chart
   */
  drawChart(dateBuy: string[], revenues: number[]) {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('myChart', {
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
