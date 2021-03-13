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


  ngOnInit(): void {
    let response = this.service.getStockSfax();
    response.subscribe((data) => this.stockSfax = data);
  }

}
