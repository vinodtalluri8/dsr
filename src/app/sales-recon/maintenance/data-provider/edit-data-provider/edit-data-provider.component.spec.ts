import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataProviderComponent } from './edit-data-provider.component';

describe('EditDataProviderComponent', () => {
  let component: EditDataProviderComponent;
  let fixture: ComponentFixture<EditDataProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
