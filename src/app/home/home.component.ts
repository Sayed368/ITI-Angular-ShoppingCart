import { Component, OnInit,Input } from '@angular/core';
import{ProductService} from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data:any;
  @Input()data:Array<object>=[];
  
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

}
