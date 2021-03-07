import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTunisComponent } from './stock-tunis.component';

describe('StockTunisComponent', () => {
  let component: StockTunisComponent;
  let fixture: ComponentFixture<StockTunisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTunisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
