import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradeCategoryComponent } from './add-trade-category.component';

describe('AddTradeCategoryComponent', () => {
  let component: AddTradeCategoryComponent;
  let fixture: ComponentFixture<AddTradeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTradeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
