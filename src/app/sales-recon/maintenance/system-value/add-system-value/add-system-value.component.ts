import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../../../services/mock-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-system-value',
  templateUrl: './add-system-value.component.html',
  styleUrls: ['./add-system-value.component.css']
})
export class AddSystemValueComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  dataJson;
  formType;
  code;
  valueChar2;
  valueNum2;
  activeStatus;
  description;
  valueChar3;
  valueNum3;
  valueChar1;
  valueNum1;
  notes;

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
    if ( !this.code || !this.valueChar2 || !this.valueNum2 || !this.activeStatus || !this.description || !this.valueChar3 || !this.valueChar1 || !this.valueNum3 || !this.valueNum1 || !this.notes ) {
      return true;
    } else {
      return false;
    }
  }

  saveData(){
        if (!this.disable()) {
      this.dataJson = {
          'code': this.code,
          'valueChar2': this.valueChar2,
          'valueNum2': this.valueNum2,
          'activeStatus': this.activeStatus,
          'description': this.description,
          'valueChar3': this.valueChar3,
          'valueNum3': this.valueNum3,
          'valueChar1': this.valueChar1,
          'valueNum1': this.valueNum1,
          'notes': this.notes
      };
    }

    console.log('dataJson',this.dataJson);
  }

  resetAll(){
      this.code = '';
      this.valueChar2 = '';
      this.valueNum2 = '';
      this.activeStatus = '';
      this.description = '';
      this.valueChar3 = '';
      this.valueNum3 = '';
      this.valueChar1 = '';
      this.valueNum1 = '';
      this.notes = '';
  }

}
