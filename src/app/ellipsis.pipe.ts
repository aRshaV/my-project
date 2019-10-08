import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, lenght: number): any {
    return this.subs(value, lenght);
  }

  subs(value: string, lenght: number): string {
    return value.substring(0, lenght) + '...';
  }

}
