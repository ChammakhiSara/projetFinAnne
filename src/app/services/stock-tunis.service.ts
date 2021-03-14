import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockTunisService {

  constructor(private http: HttpClient) { }

  //upload stock totale to backend
  public uploadStockTunisToBackend(uploadExcelData){

    return this.http.post('http://localhost:8080/stock/tunis/upload', uploadExcelData);
       
 
   }
  // get all table stock tunis from backend
  public getStockTunis() {
    return this.http.get("http://localhost:8080/stock/tunis/");
  }
  // search data with MaterialCode from backend
  public searchMaterialCode(materialCode){
    return this.http.get("http://localhost:8080/stock/tunis/materialCode/"+materialCode);
  }
  // search  data with MaterialDesc from backend
  public searchMaterialDesc(materialDesc){
    return this.http.get("http://localhost:8080/stock/tunis/materialDesc/"+materialDesc);
  }


}
