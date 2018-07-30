import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionReconciliationComponent } from './position-reconciliation.component';

describe('PositionReconciliationComponent', () => {
  let component: PositionReconciliationComponent;
  let fixture: ComponentFixture<PositionReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
