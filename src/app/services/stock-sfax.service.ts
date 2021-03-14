import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockSfaxService {

  constructor(private http:HttpClient) { }

  //upload stock totale to backend
  public uploadStockSfaxToBackend(uploadExcelData){

    return this.http.post('http://localhost:8080/stock/sfax/upload', uploadExcelData);
       
 
   }

  // get all table stock sfax from backend
  public getStockSfax(){
    return this.http.get("http://localhost:8080/stock/sfax/");
  }
  // search data with MaterialCode from backend
  public searchMaterialCode(materialCode){
    return this.http.get("http://localhost:8080/stock/sfax/materialCode/"+materialCode);
  }
  // search  data with MaterialDesc from backend
  public searchMaterialDesc(materialDesc){
    return this.http.get("http://localhost:8080/stock/sfax/materialDesc/"+materialDesc);
  }
}
