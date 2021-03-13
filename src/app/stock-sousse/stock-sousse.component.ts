import { Component, OnInit } from '@angular/core';
import { StockSousseService } from '../services/stock-sousse.service';

@Component({
  selector: 'app-stock-sousse',
  templateUrl: './stock-sousse.component.html',
  styleUrls: ['./stock-sousse.component.css']
})
export class StockSousseComponent implements OnInit {

  stockSousse: any;
  p: number;
  selectedFile : File;

  constructor(private service: StockSousseService) { }


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
    let res = this.service.uploadStockSousseToBackend(uploadExcelData);
    let msg :any;
    res.subscribe((data)=> msg = data);
  }


  ngOnInit(): void {
    let response = this.service.getStockSousse();
    response.subscribe((data) => this.stockSousse = data);
  }

}
