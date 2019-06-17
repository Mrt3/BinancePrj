import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value, args: string[]): any {
    const convert = [];
    for (const key in value) {
      convert.push(value[key]);
    }
    return convert;
  }

}
