import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";
import { ActivatedRoute } from "@angular/router";

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
    if ( !this.tradeCategoryCode || !this.tradeTypeCode || !this.activeStatus || !this.tradeCategoryDescription || !this.tradeFlowTypeCode ) {
      return true;
    } else {
      return false;
    }
  }

  saveData(){
        if (!this.disable()) {
      this.dataJson = {
          'tradeCategoryCode' : this.tradeCategoryCode,
          'tradeTypeCode' : this.tradeTypeCode,
          'activeStatus' : this.activeStatus,
          'tradeCategoryDescription' : this.tradeCategoryDescription,
          'tradeFlowTypeCode' : this.tradeFlowTypeCode
      };
    }

    console.log('dataJson',this.dataJson);
  }

  resetAll(){
      this.tradeCategoryCode = '';
      this.tradeTypeCode = '';
      this.activeStatus = '';
      this.tradeCategoryDescription = '';
      this.tradeFlowTypeCode = '';
  }


}
