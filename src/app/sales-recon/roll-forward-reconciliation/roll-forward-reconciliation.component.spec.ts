import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollForwardReconciliationComponent } from './roll-forward-reconciliation.component';

describe('RollForwardReconciliationComponent', () => {
  let component: RollForwardReconciliationComponent;
  let fixture: ComponentFixture<RollForwardReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollForwardReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollForwardReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
