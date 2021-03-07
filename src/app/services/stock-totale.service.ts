import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockTotaleService {

  constructor(private http:HttpClient) { }

   // get all table stock totale from backend
   public getStockTotale(){
    return this.http.get("http://localhost:8080/stockTotale/");
  }
}
