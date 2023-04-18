import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], field: string, filter_value: string): any {
    if (field && filter_value.length > 0) {
      return value.filter(x => x[field] === filter_value);
    }
    else {
      return [];
    }

  }

}
