import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockTunisService {

  constructor(private http: HttpClient) { }

  // get all table stock tunis from backend
  public getStockTunis() {
    return this.http.get("http://localhost:8080/stockTunis/");
  }

}
