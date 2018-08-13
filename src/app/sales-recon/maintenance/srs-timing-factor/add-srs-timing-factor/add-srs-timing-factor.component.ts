import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-add-srs-timing-factor',
  templateUrl: './add-srs-timing-factor.component.html',
  styleUrls: ['./add-srs-timing-factor.component.css']
})
export class AddSrsTimingFactorComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  dataProvider;
  tradeTypeCode;
  tradePostTimingFactor;
  posSettleTimingFactor;
  dataJson;
  formType;
  header;
  itemsPath: MenuItem[];

  constructor(private mockService : MockDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formType = params['type'];
    })
            if( this.formType == 'add'){
      this.header = "Add SRS Timing Factor";
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'SRS Timing Factor'},
      { label: 'Add SRS Timing Factor'}
      ];
    }
    else{
      this.header = "Edit SRS Timing Factor";
      this.itemsPath = [
      { label: 'Maintenance'},
      { label: 'SRS Timing Factor'},
      { label: 'Edit SRS Timing Factor'}
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
    if ( !this.dataProvider || !this.tradeTypeCode || !this.tradePostTimingFactor || !this.posSettleTimingFactor ) {
      return true;
    } else {
      return false;
    }
  }

  saveData(){
        if (!this.disable()) {
      this.dataJson = {
          'dataProvider' : this.dataProvider,
          'tradeTypeCode' : this.tradeTypeCode,
          'tradePostTimingFactor' : this.tradePostTimingFactor,
          'posSettleTimingFactor' : this.posSettleTimingFactor
      };
    }

    console.log('dataJson',this.dataJson);
  }

  resetAll(){
      this.dataProvider = '';
      this.tradeTypeCode = '';
      this.tradePostTimingFactor = '';
      this.posSettleTimingFactor = '';
  }

}
