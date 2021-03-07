import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BOMService {

  constructor(private http:HttpClient) { }

  // get all table BOM from backend
  public getBOM(){
    return this.http.get("http://localhost:8080/bom/");
  }

}
