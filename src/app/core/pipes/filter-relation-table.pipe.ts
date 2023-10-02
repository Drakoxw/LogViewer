import { Pipe, PipeTransform } from '@angular/core';
import { DataRelationsLog } from '@interfaces/responses';
import { filterTable } from '@utils/index';

@Pipe({
  name: 'filterRelationTable'
})
export class FilterRelationTablePipe implements PipeTransform {

  transform(
    data: DataRelationsLog[],
    filter: string,
    page: number,
    length: number
  ): DataRelationsLog[] {
    if (filter) {
      return filterTable(data, filter, page, length);
    }
    return filterTable(data, '', page, length);
  }
}
