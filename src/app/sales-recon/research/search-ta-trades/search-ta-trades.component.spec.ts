import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTaTradesComponent } from './search-ta-trades.component';

describe('SearchTaTradesComponent', () => {
  let component: SearchTaTradesComponent;
  let fixture: ComponentFixture<SearchTaTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTaTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTaTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
