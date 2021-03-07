import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSfaxComponent } from './stock-sfax.component';

describe('StockSfaxComponent', () => {
  let component: StockSfaxComponent;
  let fixture: ComponentFixture<StockSfaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSfaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
