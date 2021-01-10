import { Component, Input, OnInit } from '@angular/core';
import{ProductService} from '../services/product.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

 @Input() data=[];

  value=''
  name:string;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    
      this.productservice.getProducts().subscribe({
        next:(data)=> {
  
          this.data=data;
          console.log('success: ', data);
          
          
        },
        error(msg) {
          console.log('error: ', msg);
        }
      });
  
    
   
  }







  getVal(val){
    this.value=val;
    
    return val
  }


}
