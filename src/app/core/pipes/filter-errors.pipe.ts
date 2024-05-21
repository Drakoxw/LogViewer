import { Pipe, PipeTransform } from '@angular/core';
import { MimError } from '@interfaces/responses';
import { filterTable } from '@utils/index';


@Pipe({
  name: 'filterErrors'
})
export class FilterErrorsPipe implements PipeTransform {

  transform(
    data: MimError[],
    filter: string,
    page: number,
    length: number
  ): MimError[] {
    if (filter) {
      return filterTable(data, filter, page, length);
    }
    return filterTable(data, '', page, length);
  }

}
