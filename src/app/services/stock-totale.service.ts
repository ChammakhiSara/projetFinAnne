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
   // load stock totale with models
   public getStockTotale(){
    return this.http.get("http://localhost:8080/stockWithModels/countrystock/");
  }

  // // search bom data with description from backend
  // public searchMaterialCode(materialCode){
  //   return this.http.get("http://localhost:8080/stock/country/materialCode/"+materialCode);
  // }
  //  // search bom data with description from backend
  //  public searchMaterialName(materialName){
  //   return this.http.get("http://localhost:8080/stock/country/materialName/"+materialName);
  // }
}
