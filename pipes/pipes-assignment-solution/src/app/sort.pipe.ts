import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false // Para asegurarnos de que se reaplica si cambia la fuente de entrada
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {

    return value.sort(
      function (a, b) {
        if (a[propName] > b[propName]) {
          return 1;
        } else if (a[propName] < b[propName]) {
          return -1
        } else {
          return 0;
        }
      });
  }

}
