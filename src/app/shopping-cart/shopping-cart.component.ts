import { Component, OnInit ,Input} from '@angular/core';
import{ProductService} from '../services/product.service';
import{MessengerService} from '../services/messenger.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  arr:Array<object>=[];
  @Input() data:Array<object>=[];
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {

  }
  handleAddToCart(data)
  {
    
    let arr=JSON.parse(localStorage.getItem("cart"));
    if(arr==null)
    {
      arr=[]
      let obj={"id":data.id,"price":data.price,"title":data.title,"image":data.image,count:1}
      arr.push(obj)
      let item = JSON.stringify(arr);
      localStorage.setItem("cart",item);

    }else{

    let element=arr.find(el=>el.id==data.id);
    if(element)
    {
      element.count++;
      let item = JSON.stringify(arr);
      localStorage.setItem("cart",item);
    }
    else{
      let obj={"id":data.id,"price":data.price,"title":data.title,"image":data.image,count:1}
      arr.push(obj)
      let item = JSON.stringify(arr);
      localStorage.setItem("cart",item);

    }

    }
   
    
    
    
    

    let result = JSON.parse(localStorage.getItem("cart"));
    console.log("result",result);
    alert("Added to cart")
    window.location.reload();

  }

  viewDetailes(data){
    localStorage.setItem("id",data.id);
    console.log(localStorage.getItem("id"));
    
    
  }

}
