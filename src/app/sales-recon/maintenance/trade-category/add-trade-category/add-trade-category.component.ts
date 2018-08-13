import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../../../services/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-trade-category',
  templateUrl: './add-trade-category.component.html',
  styleUrls: ['./add-trade-category.component.css']
})
export class AddTradeCategoryComponent implements OnInit {

 mockDropDownData;
  mockMultiDropDownData;
  tradeCategoryCode;
  tradeTypeCode;
  activeStatus;
  tradeCategoryDescription;
  tradeFlowTypeCode;
  dataJson;
  formType;
  header;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formType = params['type'];
    });
                if ( this.formType == 'add') {
      this.header = 'Add Trade Category';
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Trade Category'},
      { label: 'Add Trade Category'}
      ];
    } else {
      this.header = 'Edit Trade Category';
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'Trade Category'},
      { label: 'Edit Trade Category'}
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
    if ( !this.tradeCategoryCode || !this.tradeTypeCode || !this.activeStatus || !this.tradeCategoryDescription || !this.tradeFlowTypeCode ) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
        if (!this.disable()) {
      this.dataJson = {
          'tradeCategoryCode' : this.tradeCategoryCode,
          'tradeTypeCode' : this.tradeTypeCode,
          'activeStatus' : this.activeStatus,
          'tradeCategoryDescription' : this.tradeCategoryDescription,
          'tradeFlowTypeCode' : this.tradeFlowTypeCode
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
      this.tradeCategoryCode = '';
      this.tradeTypeCode = '';
      this.activeStatus = '';
      this.tradeCategoryDescription = '';
      this.tradeFlowTypeCode = '';
  }


}
