import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: string, len?: number): string {
    const length = len ? len : 10;
    return value.length > length ? value.substr(0, length) + '...' : value;
  }

}
