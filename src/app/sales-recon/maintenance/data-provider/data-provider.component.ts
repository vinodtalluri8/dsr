import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-provider',
  templateUrl: './data-provider.component.html',
  styleUrls: ['./data-provider.component.css']
})
export class DataProviderComponent implements OnInit {

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
      { label: 'Data Providers' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Code', width: '10%' },
      { field: 'description', header: 'Description', width: '10%' },
      { field: 'dailyTradeReconFlag', header: 'Daily Trade Recon Flag', width: '10%' },
      { field: 'tradeReconFlag', header: 'Trade Recon Flag', width: '10%' },
      { field: 'monthlyRollFwdFlag', header: 'Monthly Roll Fwd Flag', width: '10%' },
      { field: 'tradeFailThresholdPercent', header: 'Trade Fail Threshold Percent', width: '10%' },
      { field: 'posFailThresholdPercent', header: 'Pos Fail Threshold Percent', width: '8%' },
      { field: 'tradeFailThresholdShares', header: 'Trade Fail Threshold Shares', width: '8%' },
      { field: 'posFailThresholdShares', header: 'Pos Fail Threshold Percent', width: '8%' },
      { field: 'activeFlag', header: 'Active Flag', width: '5%' },
      { field: 'a', header: '', width: '10%' },
    ];
  }

  ngOnInit() {
    this.selectedFilter = 'Active Only';
    this.sales = [
      {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''}
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

  addNew() {
    this.router.navigate(['/maintenance/dataprovider/add']);
  }
  editDataProvider() {
    this.router.navigate(['/maintenance/dataprovider/edit']);
  }
}
