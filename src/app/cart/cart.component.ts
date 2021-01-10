import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder, Validators ,FormArray} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:Array<object>=[];
  // cartitems=[];
  cartTotal=0;
  count=1;

  ReactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.ReactiveForm = this.fb.group({
      address: ['' , [Validators.required , Validators.minLength(3)]],
      email: ['' , [Validators.required , Validators.minLength(10),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),Validators.email]],
      phone: ['' , [Validators.required , Validators.minLength(10)]]
     
    });

    this.cartitems=JSON.parse(localStorage.getItem("cart"));
    console.log(this.cartitems);
    
  }

// ro return form values to html
  get registerFormControl() {
    // console.log( this.ReactiveForm.controls)
    return this.ReactiveForm.controls;
  }
  ReactiveFormSubmit(){
    if(this.ReactiveForm.valid){
     
    }

  }

  remove(data){
    let arr=JSON.parse(localStorage.getItem("cart"));
    let newarr=arr.filter(el=>el.id !== +data.id);

    let item = JSON.stringify(newarr);
    localStorage.setItem("cart",item);
    this.ngOnInit();
    window.location.reload();

  }


  increment(id){
    
    let arr=JSON.parse(localStorage.getItem("cart"));
    
    let newarr=arr.find(el=>el.id==id);
    
    if(newarr.count>=0&&newarr.count<10)
    {
      newarr.count+=1;
      let item = JSON.stringify(arr);
      localStorage.setItem("cart",item);
      this.ngOnInit();
    }
    
    

  }

  decrement(id){
    let arr=JSON.parse(localStorage.getItem("cart"));
    
    let newarr=arr.find(el=>el.id==id);
    if(newarr.count>1){
      newarr.count--;
      let item = JSON.stringify(arr);
      localStorage.setItem("cart",item);
      this.ngOnInit();
    }
    
  }

  checkOut(){

    let arr=[];
    let item = JSON.stringify(arr);
    localStorage.setItem("cart",item);
    alert("Order Done")
    this.ngOnInit();
    window.location.reload();

  }

}
