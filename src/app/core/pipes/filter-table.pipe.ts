import { Pipe, PipeTransform } from '@angular/core';
import { DataQuoteLogsRequest } from '@interfaces/responses';
import { filterTable } from '@utils/index';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
  transform(
    data: DataQuoteLogsRequest[],
    filter: string,
    page: number,
    length: number
  ): DataQuoteLogsRequest[] {
    if (filter) {
      return filterTable(data, filter, page, length);
    }
    return filterTable(data, '', page, length);
  }
}
