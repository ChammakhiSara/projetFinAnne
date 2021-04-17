import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBom'
})
export class FiltreBomPipe implements PipeTransform {
  transform(array: any[], searchText: any): any[] {    
    if (!searchText) 
      {      return array;    }  
    else{      
      let search = searchText.toLowerCase();     
       return array.filter(x=>{ 
         // sap_code to string cause its a number
         return  x.sap_Code.toString().toLowerCase().includes(search) || x.model.toLowerCase().includes(search) || x.componentdescriptionEnglish.toLowerCase().includes(search) }) 
         } 
         }

}
