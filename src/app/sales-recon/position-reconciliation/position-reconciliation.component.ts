import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-position-reconciliation',
  templateUrl: './position-reconciliation.component.html',
  styleUrls: ['./position-reconciliation.component.css']
})
export class PositionReconciliationComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  dataProvider;
  reconStatus;
  fundStatus;
  productCode;
  startdate;
  sortBy;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
        this.itemsPath = [
      { label: 'Position Reconciliation' }];
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
    if ( !this.dataProvider || !this.reconStatus || !this.fundStatus || !this.startdate || !this.productCode || !this.sortBy) {
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
        'fromDate': this.startdate.toString(),
        'productCode': this.productCode,
        'sortBy': this.sortBy
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
        this.dataProvider = '';
        this.reconStatus = '';
        this.fundStatus = '';
        this.startdate = new Date();
        this.productCode = '';
        this.sortBy = '';
  }

  checkRadio(data) {
  console.log(data);
}

}
