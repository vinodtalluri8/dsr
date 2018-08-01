import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../services/mock-data.service";

@Component({
  selector: 'app-search-srs-trades',
  templateUrl: './search-srs-trades.component.html',
  styleUrls: ['./search-srs-trades.component.css']
})
export class SearchSrsTradesComponent implements OnInit {
    
   
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

  constructor(private mockService : MockDataService) { }

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

  saveData(){
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

    console.log('dataJson',this.dataJson);
  }

  resetAll(){
         this.dataProvider = '';
         this.reportedFlag = '';
         this.batchId = '';
         this.taPostDate = new Date();
         this.productCode = '';
         this.serialId = '';
         this.tradeType = '';
         this.clearFirmCode = '';
  }


}
