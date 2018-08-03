import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataProviderComponent } from './add-data-provider.component';

describe('AddDataProviderComponent', () => {
  let component: AddDataProviderComponent;
  let fixture: ComponentFixture<AddDataProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
