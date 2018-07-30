import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../services/mock-data.service";

@Component({
  selector: 'app-sales-recon',
  templateUrl: './sales-recon.component.html',
  styleUrls: ['./sales-recon.component.css']
})
export class SalesReconComponent implements OnInit {
  // mockDropDownData;
  // mockMultiDropDownData;
  // dataProvider;
  // reconStatus;
  // fundStatus;
  // fromDate;
  // productCode;
  // toDate;
  // sortBy;
  // dataJson;

  constructor(private mockService : MockDataService) { }

  ngOnInit() {
    // this.preloadData();
  }

  //   preloadData() {
  //   this.mockService.getMatrixData().subscribe(
  //     (data) => {
  //       this.mockDropDownData = data;
  //     }
  //   );
  //   this.mockService.getMatrixMultiSelect().subscribe(
  //     (data) => {
  //       this.mockMultiDropDownData = data;
  //     }
  //   );
  // }

  // disable() {
  //   if ( !this.dataProvider || !this.reconStatus || !this.fundStatus || !this.fromDate || !this.productCode || !this.toDate || !this.sortBy) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // saveData(){
  //       if (!this.disable()) {
  //     this.dataJson = {
  //       'dataProvider': this.dataProvider,
  //       'reconStatus': this.reconStatus,
  //       'fundStatus': this.fundStatus,
  //       'fromDate': this.fromDate.toString(),
  //       'productCode': this.productCode,
  //       'toDate': this.toDate.toString(),
  //       'sortBy': this.sortBy
  //     };
  //   }

  //   console.log('dataJson',this.dataJson);
  // }


}
