import { Component, OnInit } from '@angular/core';
import { StockSfaxService } from '../services/stock-sfax.service';

@Component({
  selector: 'app-stock-sfax',
  templateUrl: './stock-sfax.component.html',
  styleUrls: ['./stock-sfax.component.css']
})
export class StockSfaxComponent implements OnInit {

  stockSfax: any;
  p: number;
  selectedFile : File;
  materialCode : any;
  materialDesc : any;


  constructor(private service: StockSfaxService) { }

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
    let res = this.service.uploadStockSfaxToBackend(uploadExcelData);
    let msg :any;
    res.subscribe((data)=> msg = data);
  }
  // search MaterialCode
  searchMaterialCode(){
    let res = this.service.searchMaterialCode(this.materialCode);
    res.subscribe((data)=> this.stockSfax = data);
 } 
 // search MaterialDesc
 searchMaterialDesc(){
  let res = this.service.searchMaterialDesc(this.materialDesc);
  res.subscribe((data)=> this.stockSfax = data);
} 


  ngOnInit(): void {
    let response = this.service.getStockSfax();
    response.subscribe((data) => this.stockSfax = data);
  }

}
