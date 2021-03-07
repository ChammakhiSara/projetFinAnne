import { Component, OnInit } from '@angular/core';
import { StockTotaleService } from '../services/stock-totale.service';

@Component({
  selector: 'app-stock-totale',
  templateUrl: './stock-totale.component.html',
  styleUrls: ['./stock-totale.component.css']
})
export class StockTotaleComponent implements OnInit {

  stockTotale: any;

  constructor(private service: StockTotaleService) { }

  ngOnInit(): void {
    let response = this.service.getStockTotale();
    response.subscribe((data) => this.stockTotale = data);
  }

}
