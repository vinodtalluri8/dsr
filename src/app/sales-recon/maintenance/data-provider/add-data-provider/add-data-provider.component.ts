import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";

@Component({
  selector: 'app-add-data-provider',
  templateUrl: './add-data-provider.component.html',
  styleUrls: ['./add-data-provider.component.css']
})
export class AddDataProviderComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  dataProviderCode;
  calendarType;
  tradeFailThresholdShares;
  dataProviderDescription;
  posFailThresholdPercent;
  posFailThresholdShares;
  reconLevel;
  tradeReconType;
  tradeFailThresholdPercent;
  activeStatus;
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
    if ( !this.dataProviderCode || !this.calendarType || !this.tradeFailThresholdShares || !this.dataProviderDescription || !this.posFailThresholdPercent || !this.posFailThresholdShares || !this.reconLevel || !this.tradeReconType || !this.tradeFailThresholdPercent || !this.activeStatus) {
      return true;
    } else {
      return false;
    }
  }

  saveData(){
        if (!this.disable()) {
      this.dataJson = {
        'dataProviderCode': this.dataProviderCode,
        'calendarType': this.calendarType,
        'tradeFailThresholdShares': this.tradeFailThresholdShares,
        'dataProviderDescription': this.dataProviderDescription,
        'posFailThresholdPercent': this.posFailThresholdPercent,
        'posFailThresholdShares': this.posFailThresholdShares,
        'reconLevel': this.reconLevel,
        'tradeReconType': this.tradeReconType,
        'tradeFailThresholdPercent': this.tradeFailThresholdPercent,
        'activeStatus': this.activeStatus
      };
    }

    console.log('dataJson',this.dataJson);
  }

  resetAll(){
      this.dataProviderCode = '';
      this.calendarType = '';
      this.tradeFailThresholdShares = '';
      this.dataProviderDescription = ''; 
      this.posFailThresholdPercent = '';
      this.posFailThresholdShares = '';
      this.reconLevel = '';
      this.tradeReconType = '';
      this.tradeFailThresholdPercent = '';
      this.activeStatus = '';
  }

}
