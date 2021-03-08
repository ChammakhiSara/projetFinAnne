import { Component, OnInit } from '@angular/core';
import { BOMService } from '../services/bom.service';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BOMComponent implements OnInit {

  BOM: any;
  selectedFile: File;


  constructor(private service: BOMService) { }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    let res = this.service.uploadBomToBackend(uploadImageData);
    let msg :any;
    res.subscribe((data)=> msg =data);
  }
    

  

  ngOnInit(): void {
    let response = this.service.getBOM();
    response.subscribe((data) => this.BOM = data);
  }  
 
}
