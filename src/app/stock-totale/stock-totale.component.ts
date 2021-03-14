import { Component, OnInit } from '@angular/core';
import { StockTotaleService } from '../services/stock-totale.service';

@Component({
  selector: 'app-stock-totale',
  templateUrl: './stock-totale.component.html',
  styleUrls: ['./stock-totale.component.css']
})
export class StockTotaleComponent implements OnInit {

  stockTotale: any;
  p: number;
  selectedFile : File;
  materialName :any;
  materialCode : any;

  constructor(private service: StockTotaleService) { }
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on enregistrer to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadExcelData = new FormData();
    uploadExcelData.append('file', this.selectedFile, this.selectedFile.name);
    let res = this.service.uploadCountryStockToBackend(uploadExcelData);
    let msg :any;
    res.subscribe((data)=> msg = data);
  }
  // search description
  searchMaterialCode(){
    let res = this.service.searchMaterialCode(this.materialCode);
    res.subscribe((data)=> this.stockTotale = data);
 } 
 // search description
 searchMaterialName(){
  let res = this.service.searchMaterialName(this.materialName);
  res.subscribe((data)=> this.stockTotale = data);
} 


  ngOnInit(): void {
    let response = this.service.getStockTotale();
    response.subscribe((data) => this.stockTotale = data);
  }

}
