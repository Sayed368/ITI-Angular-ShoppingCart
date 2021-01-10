import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pros:any[] , name:string): any {
    if(name == undefined)
    {
      return pros;
    }
      return pros.filter(function(pros){
            return pros.title.toLowerCase().includes(name.toLowerCase())
      });
    }
 
}
