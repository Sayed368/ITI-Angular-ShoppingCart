import { Component, OnInit } from '@angular/core';
import{ProductService} from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data:Array<object>=[];
  
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    

    
    


    this.getData();


    console.log("hello",this.data);
    
  
    
   
    
  }

  getData(){
    let value=localStorage.getItem("id");

    this.productservice.getProductList(value).subscribe({
      next:(data)=> {
        this.data.push(data);
        console.log('success: ', data);
       
        
      },
      error(msg) {
        console.log('error: ', msg);
      }
    });
    
    return this.data
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
}
