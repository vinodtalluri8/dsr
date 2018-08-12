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
      { label: 'Sales Recon System Values' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Code'},
      { field: 'description', header: 'Description'},
      { field: 'valueChar1', header: 'Value Char1'},
      { field: 'valueChar2', header: 'Value Char2'},
      { field: 'valueChar3', header: 'Value Char3'},
      { field: 'valueNum1', header: 'Value Num1'},
      { field: 'valueNum2', header: 'Value Num2'},
      { field: 'valueNum3', header: 'Value Num3'},
      { field: 'notes', header: 'Notes'},
      { field: 'activeStatus', header: 'Active Status'},
      { field: 'a', header: ''}
    ];
  }

  ngOnInit() {
    this.selectedFilter = "Active Only"
    this.sales = [
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''},
            {code:'AAAAAA',description:'This is description',valueChar1:'Y',valueChar2:'Y',valueChar3:'Y',valueNum1:'Y',valueNum2:'Y',valueNum3:'Y',notes:'aaaaaa',activeStatus:'Y',a:''}
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
    this.router.navigate(['/maintenance/systemvalue/add']);
  }
  editDataProvider(){
    this.router.navigate(['/maintenance/systemvalue/edit']);
  }

}
