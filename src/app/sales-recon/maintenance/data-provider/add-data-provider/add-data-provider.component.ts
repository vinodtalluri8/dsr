import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { MenuItem } from "primeng/api";

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
  formType;
  header;
  itemsPath: MenuItem[];

  constructor(private mockService : MockDataService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formType = params['type'];
    })
    if( this.formType == 'add'){
      this.header = "Add Sales Recon Data Providers";
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Data Provider'},
      { label: 'Add Data Provider'}
      ];
    }
    else{
      this.header = "Edit Sales Recon Data Providers";
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Data Provider'},
      { label: 'Edit Data Provider'}
      ];
    }
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
