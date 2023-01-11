import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    
    if(!value) return [];
    if(!searchText) return value;

    return value.filter((student) =>{
      return student.toLowerCase().includes(searchText)
    })
  }

}