import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrsTimingFactorComponent } from './srs-timing-factor.component';

describe('SrsTimingFactorComponent', () => {
  let component: SrsTimingFactorComponent;
  let fixture: ComponentFixture<SrsTimingFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrsTimingFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrsTimingFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
