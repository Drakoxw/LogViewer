import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToJson'
})
export class StrToJsonPipe implements PipeTransform {

  transform(value: string): object {
    try {
      return JSON.parse(value);
    } catch {
      return { info: value }
    }
  }

}
