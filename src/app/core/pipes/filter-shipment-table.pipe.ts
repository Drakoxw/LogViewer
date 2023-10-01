import { Pipe, PipeTransform } from '@angular/core';
import { DataShipmentLog } from '@interfaces/responses';
import { filterTable } from '@utils/index';

@Pipe({
  name: 'filterShipmentTable'
})
export class FilterShipmentTablePipe implements PipeTransform {

  transform(
    data: DataShipmentLog[],
    filter: string,
    page: number,
    length: number
  ): DataShipmentLog[] {
    if (filter) {
      return filterTable(data, filter, page, length);
    }
    return filterTable(data, '', page, length);
  }

}
