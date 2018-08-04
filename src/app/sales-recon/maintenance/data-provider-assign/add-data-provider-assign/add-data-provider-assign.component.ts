import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-data-provider-assign',
  templateUrl: './add-data-provider-assign.component.html',
  styleUrls: ['./add-data-provider-assign.component.css']
})
export class AddDataProviderAssignComponent implements OnInit {

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
  formType;

  constructor(private mockService : MockDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formType = params['type'];
    })
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
