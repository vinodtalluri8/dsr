import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-trade-reconciliation',
  templateUrl: './trade-reconciliation.component.html',
  styleUrls: ['./trade-reconciliation.component.css']
})
export class TradeReconciliationComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  dataProvider;
  reconStatus;
  fundStatus;
  fromDate;
  productCode;
  toDate;
  sortBy;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
        this.itemsPath = [
      { label: 'Trade Reconciliation' }];
   }

  ngOnInit() {
    this.preloadData();
  }

    preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.mockService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

  disable() {
    if ( !this.dataProvider || !this.reconStatus || !this.fundStatus || !this.fromDate || !this.productCode || !this.toDate || !this.sortBy) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'dataProvider': this.dataProvider,
        'reconStatus': this.reconStatus,
        'fundStatus': this.fundStatus,
        'fromDate': this.fromDate.toString(),
        'productCode': this.productCode,
        'toDate': this.toDate.toString(),
        'sortBy': this.sortBy
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
        this.dataProvider = '';
        this.reconStatus = '';
        this.fundStatus = '';
        this.fromDate = new Date();
        this.productCode = '';
        this.toDate = new Date();
        this.sortBy = '';
  }
checkRadio(data) {
  console.log(data);
}
}
