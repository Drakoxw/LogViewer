import { Pipe, PipeTransform } from '@angular/core';
import { DataFilesLogs } from '@interfaces/responses';
import { filterTable } from '@utils/index';

@Pipe({
  name: 'filterFile'
})
export class FilterFilePipe implements PipeTransform {

  transform(
    data: DataFilesLogs[],
    filter: string,
    page: number,
    length: number
  ): DataFilesLogs[] {
    if (filter) {
      return filterTable(data, filter, page, length);
    }
    return filterTable(data, '', page, length);
  }

}
