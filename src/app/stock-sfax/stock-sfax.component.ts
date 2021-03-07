import { Component, OnInit } from '@angular/core';
import { StockSfaxService } from '../services/stock-sfax.service';

@Component({
  selector: 'app-stock-sfax',
  templateUrl: './stock-sfax.component.html',
  styleUrls: ['./stock-sfax.component.css']
})
export class StockSfaxComponent implements OnInit {

  stockSfax: any;

  constructor(private service: StockSfaxService) { }

  ngOnInit(): void {
    let response = this.service.getStockSfax();
    response.subscribe((data) => this.stockSfax = data);
  }

}
