import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToJson'
})
export class StrToJsonPipe implements PipeTransform {

  transform(value: string): object {
    return JSON.parse(value);
  }

}
