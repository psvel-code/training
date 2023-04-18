import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string, args:string): any {
    const append_value = value+" "+args;
    return append_value;
  }

}
