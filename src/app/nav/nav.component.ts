import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  count=0;
  cartitems:Array<object>=[];
  constructor() { }

  ngOnInit(): void {

    if(JSON.parse(localStorage.getItem("cart"))){
      this.cartitems=JSON.parse(localStorage.getItem("cart"));
    this.count=JSON.parse(localStorage.getItem("cart")).length;
    console.log(this.cartitems);

    }
    
  }

}
