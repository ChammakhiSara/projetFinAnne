import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockSousseService {

  constructor(private http:HttpClient) { }

  // get all table stock sousse from backend
  public getStockSousse(){
    return this.http.get("http://localhost:8080/stockSousse/");
  }
}
