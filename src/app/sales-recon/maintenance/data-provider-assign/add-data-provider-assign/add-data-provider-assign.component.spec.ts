import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataProviderAssignComponent } from './add-data-provider-assign.component';

describe('AddDataProviderAssignComponent', () => {
  let component: AddDataProviderAssignComponent;
  let fixture: ComponentFixture<AddDataProviderAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataProviderAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataProviderAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
