import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockSfaxService {

  constructor(private http:HttpClient) { }

  // get all table stock sfax from backend
  public getStockSfax(){
    return this.http.get("http://localhost:8080/stockSfax/");
  }
}
