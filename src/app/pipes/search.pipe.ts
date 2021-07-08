import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchString: string) {
    if (value.length === 0 || searchString === '') {
      return value;
    }

    const employeeArray = [];
    for (const product of value) {
      if (product['empName'].startsWith(searchString)) {
        employeeArray.push(product);
      }
    }
    return employeeArray;
  }


}
