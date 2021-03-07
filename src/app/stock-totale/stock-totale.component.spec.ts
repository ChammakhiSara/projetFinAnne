import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTotaleComponent } from './stock-totale.component';

describe('StockTotaleComponent', () => {
  let component: StockTotaleComponent;
  let fixture: ComponentFixture<StockTotaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTotaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTotaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
