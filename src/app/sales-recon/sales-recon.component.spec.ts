import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReconComponent } from './sales-recon.component';

describe('SalesReconComponent', () => {
  let component: SalesReconComponent;
  let fixture: ComponentFixture<SalesReconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
