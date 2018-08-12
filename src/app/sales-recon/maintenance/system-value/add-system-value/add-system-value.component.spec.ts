import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemValueComponent } from './add-system-value.component';

describe('AddSystemValueComponent', () => {
  let component: AddSystemValueComponent;
  let fixture: ComponentFixture<AddSystemValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSystemValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
