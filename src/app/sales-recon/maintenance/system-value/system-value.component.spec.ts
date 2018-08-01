import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemValueComponent } from './system-value.component';

describe('SystemValueComponent', () => {
  let component: SystemValueComponent;
  let fixture: ComponentFixture<SystemValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
