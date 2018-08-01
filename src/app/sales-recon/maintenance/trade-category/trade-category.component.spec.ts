import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCategoryComponent } from './trade-category.component';

describe('TradeCategoryComponent', () => {
  let component: TradeCategoryComponent;
  let fixture: ComponentFixture<TradeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
