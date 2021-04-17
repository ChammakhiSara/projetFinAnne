import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStockLocale'
})
export class FiltreStockLocalePipe implements PipeTransform {

  transform(array: any[], searchText: any): any[] {    
    if (!searchText) 
      {      return array;    }  
    else{      
      let search = searchText.toLowerCase();     
       return array.filter(x=>{ 
         
         return  x.materialCode.toLowerCase().includes(search) || x.materialDesc.toLowerCase().includes(search) || x.models.toString().toLowerCase().includes(search)}) 
         } 
         }
}
