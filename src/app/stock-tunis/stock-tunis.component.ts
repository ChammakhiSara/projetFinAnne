import { Component, OnInit } from '@angular/core';
import { StockTunisService } from '../services/stock-tunis.service';

@Component({
  selector: 'app-stock-tunis',
  templateUrl: './stock-tunis.component.html',
  styleUrls: ['./stock-tunis.component.css']
})
export class StockTunisComponent implements OnInit {

  stockTunis: any;

  constructor(private service: StockTunisService) { }

  ngOnInit(): void {
    let response = this.service.getStockTunis();
    response.subscribe((data) => this.stockTunis = data);
  }  

}
