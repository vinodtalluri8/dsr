import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeReconciliationComponent } from './trade-reconciliation.component';

describe('TradeReconciliationComponent', () => {
  let component: TradeReconciliationComponent;
  let fixture: ComponentFixture<TradeReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
