import { Component, OnInit } from '@angular/core';
import { BOMService } from '../services/bom.service';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BOMComponent implements OnInit {

  BOM: any;

  constructor(private service: BOMService) { }

  ngOnInit(): void {
    let response = this.service.getBOM();
    response.subscribe((data) => this.BOM = data);
  }  
 
}
