import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCountryStock'
})
export class FiltreCountryStockPipe implements PipeTransform {

  transform(array: any[], searchText: any): any[] {    
    if (!searchText) 
      {      return array;    }  
    else{      
      let search = searchText.toLowerCase();     
       return array.filter(x=>{ 
         
         return  x.materialCode.toLowerCase().includes(search) || x.materialName.toLowerCase().includes(search) || x.models.toString().toLowerCase().includes(search)}) 
         } 
         }

}
