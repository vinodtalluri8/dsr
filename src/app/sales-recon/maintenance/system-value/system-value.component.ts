import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-system-value',
  templateUrl: './system-value.component.html',
  styleUrls: ['./system-value.component.css']
})
export class SystemValueComponent implements OnInit {

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
      { label: 'SRS Timing Factors' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'dataprovidercode', header: 'Data Provider Code'},
      { field: 'tradetype', header: 'Trade Type'},
      { field: 'tradePostTimingFactor', header: 'Trade Post Timing Factor'},
      { field: 'posSettleTimingFactor', header: 'Pos Settle Timing Factor'},
      { field: 'activeFlag', header: 'Active Flag'},
      { field: 'a', header: ''}
    ];
  }

  ngOnInit() {
    this.selectedFilter = "Active Only"
    this.sales = [
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''},
            {dataprovidercode:'AAAAAA',tradetype:'This is description',tradePostTimingFactor:'Y',posSettleTimingFactor:'Y',activeFlag:'Y',a:''}
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
    this.router.navigate(['/maintenance/srstimingfactor/add']);
  }
  editDataProvider(){
    this.router.navigate(['/maintenance/srstimingfactor/edit']);
  }

}
