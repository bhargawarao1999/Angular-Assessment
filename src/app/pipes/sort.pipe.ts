import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any,args:any):any
  {
    if(args==='' || args.length===0)
    {
      return value;
    }
    if(args=='low') 
    {
    
          var assendValue=value.sort((obj1:any,obj2:any) => (obj1.empSal < obj2.empSal)? -1 : 1)
          return assendValue
         }
         else if(args=='high') {
           var desendValue=value.sort((obj1:any,obj2:any) => (obj1.empSal > obj2.empSal)? -1 : 1)
          return desendValue
        }
        else if(args=='a-z') {
          var desendValue=value.sort((obj1:any,obj2:any) => (obj1.empName < obj2.empName)? -1 : 1)
          return desendValue
         }
         else if(args=='z-a') {
          var desendValue=value.sort((obj1:any,obj2:any) => (obj1.empName > obj2.empName)? -1 : 1)
         return desendValue
       }
    }

}
