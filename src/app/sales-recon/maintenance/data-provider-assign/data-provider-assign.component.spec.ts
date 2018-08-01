import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProviderAssignComponent } from './data-provider-assign.component';

describe('DataProviderAssignComponent', () => {
  let component: DataProviderAssignComponent;
  let fixture: ComponentFixture<DataProviderAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProviderAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProviderAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
