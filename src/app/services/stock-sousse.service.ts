import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockSousseService {

  constructor(private http:HttpClient) { }

  //upload stock totale to backend
  public uploadStockSousseToBackend(uploadExcelData){

  return this.http.post('http://localhost:8080/stock/sousse/upload', uploadExcelData);
     

  }
  // get all table stock sousse from backend
  public getStockSousse(){
    return this.http.get("http://localhost:8080/stock/sousse/");
  }
  // search data with MaterialCode from backend
  public searchMaterialCode(materialCode){
    return this.http.get("http://localhost:8080/stock/sousse/materialCode/"+materialCode);
  }
  // search  data with MaterialDesc from backend
  public searchMaterialDesc(materialDesc){
    return this.http.get("http://localhost:8080/stock/sousse/materialDesc/"+materialDesc);
  }
}
