import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-trade-category',
  templateUrl: './trade-category.component.html',
  styleUrls: ['./trade-category.component.css']
})
export class TradeCategoryComponent implements OnInit {

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
      { label: 'Maintenance' },
      { label: 'Trade Categories' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

    this.colHeaders = [
      { field: 'categoryCode', header: 'Category Code' },
      { field: 'categoryDescription', header: 'Category Description' },
      { field: 'typeCode', header: 'Type Code' },
      { field: 'flowType', header: 'Flow Type' },
      { field: 'includeOnTradeRecon', header: 'Include On Trade Recon' },
      { field: 'includeOnRollForward', header: 'Include On Roll Forward' },
      { field: 'activeFlag', header: 'Active Flag' },
      { field: 'a', header: '' }
    ];
  }

  ngOnInit() {
    this.selectedFilter = 'Active Only';
    this.sales = [
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
            { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' },
      { categoryCode: 'AAAAAA', categoryDescription: 'This is description', typeCode: 'Y', flowType: 'Y', includeOnTradeRecon: 'Y', includeOnRollForward: 'Y', activeFlag: 'Y', a: '' }

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
    this.router.navigate(['/maintenance/tradecategory/add']);
  }
  editDataProvider() {
    this.router.navigate(['/maintenance/tradecategory/edit']);
  }


}
