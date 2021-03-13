import { Component, OnInit } from '@angular/core';
import { StockTunisService } from '../services/stock-tunis.service';

@Component({
  selector: 'app-stock-tunis',
  templateUrl: './stock-tunis.component.html',
  styleUrls: ['./stock-tunis.component.css']
})
export class StockTunisComponent implements OnInit {

  stockTunisData: any;
  p: number;
  selectedFile : File;

  constructor(private service: StockTunisService) { }

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
    let res = this.service.uploadStockTunisToBackend(uploadExcelData);
    let msg :any;
    res.subscribe((data)=> msg = data);
  }

  ngOnInit(): void {
    let response = this.service.getStockTunis();
    response.subscribe((data) => this.stockTunisData = data);
  }  

}
