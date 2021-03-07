import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSousseComponent } from './stock-sousse.component';

describe('StockSousseComponent', () => {
  let component: StockSousseComponent;
  let fixture: ComponentFixture<StockSousseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSousseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
