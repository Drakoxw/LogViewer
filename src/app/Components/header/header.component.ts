import { Component, EventEmitter, Output } from '@angular/core';
import { CLICK } from '@constants/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() changeTable = new EventEmitter<string>()
  btnClass = 'inline-flex items-center rounded-md bg-green-50 hover:bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
  click = CLICK

  table: string = CLICK.cotizaciones

  changerTable(table: string) {
    this.table = table
    this.changeTable.emit(table)
  }

}
