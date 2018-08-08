import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSrsTimingFactorComponent } from './add-srs-timing-factor.component';

describe('AddSrsTimingFactorComponent', () => {
  let component: AddSrsTimingFactorComponent;
  let fixture: ComponentFixture<AddSrsTimingFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSrsTimingFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSrsTimingFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
