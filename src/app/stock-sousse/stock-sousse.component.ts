import { Component, OnInit } from '@angular/core';
import { StockSousseService } from '../services/stock-sousse.service';

@Component({
  selector: 'app-stock-sousse',
  templateUrl: './stock-sousse.component.html',
  styleUrls: ['./stock-sousse.component.css']
})
export class StockSousseComponent implements OnInit {

  stockSousse: any;

  constructor(private service: StockSousseService) { }

  ngOnInit(): void {
    let response = this.service.getStockSousse();
    response.subscribe((data) => this.stockSousse = data);
  }

}
