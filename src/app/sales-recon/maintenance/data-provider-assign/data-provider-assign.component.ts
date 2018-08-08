import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-provider-assign',
  templateUrl: './data-provider-assign.component.html',
  styleUrls: ['./data-provider-assign.component.css']
})
export class DataProviderAssignComponent implements OnInit {

  sales;
  isPaginator;
  filterable;
  exportFileName;
  selectedRows;
  loading;
  displayRows;
  colHeaders;
  itemsPath: MenuItem[];
  home: MenuItem;
  mockDropDownData;
  selectedProgram;
  selectedFilter;

  constructor(private router: Router) { 
     this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'Checklists Scheduled';
    this.selectedRows = 15;
    this.loading = false;
    this.home = { icon: 'fa fa-home' };

    this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Data Providers Assign' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Code'},
      { field: 'description', header: 'Description'},
      { field: 'dailyTradeReconFlag', header: 'Daily Trade Recon Flag'},
      { field: 'tradeReconFlag', header: 'Trade Recon Flag'},
      { field: 'monthlyRollFwdFlag', header: 'Monthly Roll Fwd Flag'},
      { field: 'tradeFailThresholdPercent', header: 'Trade Fail Threshold Percent'},
      { field: 'posFailThresholdPercent', header: 'Pos Fail Threshold Percent'},
      { field: 'tradeFailThresholdShares', header: 'Trade Fail Threshold Shares'},
      { field: 'posFailThresholdShares', header: 'Pos Fail Threshold Percent'},
      { field: 'activeFlag', header: 'Active Flag'},
      { field: 'dailyTradeReconFlag', header: 'Daily Trade Recon Flag'},
      { field: 'tradeReconFlag', header: 'Trade Recon Flag'},
      { field: 'monthlyRollFwdFlag', header: 'Monthly Roll Fwd Flag'},
      { field: 'tradeFailThresholdPercent', header: 'Trade Fail Threshold Percent'},
      { field: 'posFailThresholdPercent', header: 'Pos Fail Threshold Percent'},
      { field: 'tradeFailThresholdShares', header: 'Trade Fail Threshold Shares'},
      { field: 'posFailThresholdShares', header: 'Pos Fail Threshold Percent'},
      { field: 'activeFlag', header: 'Active Flag'},
      { field: 'a', header: ''},
    ];
  }

  ngOnInit() {
    this.selectedFilter = "Active Only"
    this.sales = [
      {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''},
            {code:'AAAAAA',description:'This is description',dailyTradeReconFlag:'Y',tradeReconFlag:'Y',monthlyRollFwdFlag:'Y',tradeFailThresholdPercent:'0.25',posFailThresholdPercent:'0.25',tradeFailThresholdShares:'10.0',posFailThresholdShares:'10.0',activeFlag:'Y',a:''}
           ];

  }

      checkAndEnablePage(value: number) {
    if (this.sales.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
    // console.log(' mesagepage ', this.msgs);
  }

  addNew(){
    this.router.navigate(['/maintenance/dataproviderassign/add']);
  }
  editDataProvider(){
    this.router.navigate(['/maintenance/dataproviderassign/edit']);
  }
}
