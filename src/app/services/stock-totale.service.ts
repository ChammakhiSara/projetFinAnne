import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockTotaleService {

  constructor(private http:HttpClient) { }

   //upload stock totale to backend
   public uploadCountryStockToBackend(uploadExcelData){

    return this.http.post('http://localhost:8080/stock/country/upload', uploadExcelData);
       
 
   }
   // get all table stock totale from backend
   public getStockTotale(){
    return this.http.get("http://localhost:8080/stock/country/");
  }
}
