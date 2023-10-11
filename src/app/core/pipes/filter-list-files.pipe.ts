import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListFiles'
})
export class FilterListFilesPipe implements PipeTransform {

  transform(data: string[] ,value: string): string[] {
    if (value) {
      return data.filter(item => item.includes(value));
    }
    return data;
  }

}
