import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BOMService {

  constructor(private http:HttpClient) { }

 
  //upload bom to backend
  public uploadBomToBackend(uploadExcelData) : Observable<any> {

   return this.http.post('http://localhost:8080/bom/upload', uploadExcelData , {responseType :'json'});
      

  }

  // get bom data from backend
  public getBOM(){
    return this.http.get("http://localhost:8080/bom/");
  }

  // search bom data with description from backend
  public searchBOMDescription(description){
    return this.http.get("http://localhost:8080/bom/description/"+description);
  }
   // search bom data with model from backend
   public searchBOMModel(model){
    return this.http.get("http://localhost:8080/bom/model/"+model);
  }
   // search bom data with sapCode from backend
   public searchBOMSapCode(sapCode){
    return this.http.get("http://localhost:8080/bom/sapCode/"+sapCode);
  }


}
