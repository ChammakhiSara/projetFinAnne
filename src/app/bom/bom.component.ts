import { Component, OnInit } from '@angular/core';
import { BOMService } from '../services/bom.service';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BOMComponent implements OnInit {

  BOM: any;
  p :number=1;
  selectedFile: File;
  description: string;
  searchText: any;
   



  constructor(private service: BOMService) { }

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
    let res = this.service.uploadBomToBackend(uploadExcelData);
    res.subscribe(
      data=>{
      console.log(data)
      alert('BOM importé avec succés.')
      },
      error=>{
        alert("une erreur s'est produite veuiilez réessayer")
      }
      
     );
   }
//    // search description
//    searchBomDescription(){
//       let res = this.service.searchBOMDescription(this.description);
//       res.subscribe((data)=> this.BOM = data);
//    } 
//    // search model
//    searchBomModel(){
//     let res = this.service.searchBOMModel(this.model);
//     res.subscribe((data)=> this.BOM = data);
//    } 
//  // search sapCode
//     searchBomSapCode(){
//   let res = this.service.searchBOMSapCode(this.sap);
//   res.subscribe((data)=> this.BOM = data);
//   } 

  

  ngOnInit(): void {
    // load the data just when the page displayed
    let response = this.service.getBOM();
    response.subscribe((data) => this.BOM = data);
    console.log(this.BOM);
    
  }  
 
}
