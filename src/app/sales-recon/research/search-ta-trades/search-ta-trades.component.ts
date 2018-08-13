import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-ta-trades',
  templateUrl: './search-ta-trades.component.html',
  styleUrls: ['./search-ta-trades.component.css']
})
export class SearchTaTradesComponent implements OnInit {

    mockMultiDropDownData;
    mockDropDownData;
    dataProvider;
    reportedFlag;
    batchId;
    taPostDate;
    productCode;
    serialId;
    tradeType;
    clearFirmCode;
    fundRadio;
    ProductRadio;
    dataJson;
    itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
           this.itemsPath = [
      { label: 'Research'},
      { label: 'Search TA Trades'}
      ];
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
    if ( !this.dataProvider || !this.reportedFlag || !this.batchId || !this.taPostDate || !this.productCode || !this.serialId || !this.tradeType || !this.clearFirmCode) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
        'dataProvider': this.dataProvider,
        'reportedFlag': this.reportedFlag,
        'batchId': this.batchId,
        'taPostDate': this.taPostDate,
        'productCode': this.productCode,
        'serialId': this.serialId,
        'tradeType': this.tradeType,
        'clearFirmCode': this.clearFirmCode
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
         this.dataProvider = '';
         this.reportedFlag = '';
         this.batchId = '';
         this.taPostDate = new Date();
         this.productCode = '';
         this.serialId = '';
         this.tradeType = '';
         this.clearFirmCode = '';
  }

  checkRadio(data) {
  console.log(data);
}

}
