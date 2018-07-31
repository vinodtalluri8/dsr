import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSrsTradesComponent } from './search-srs-trades.component';

describe('SearchSrsTradesComponent', () => {
  let component: SearchSrsTradesComponent;
  let fixture: ComponentFixture<SearchSrsTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSrsTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSrsTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
