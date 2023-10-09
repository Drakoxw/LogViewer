import { Component, Input } from '@angular/core';
import { DataFilesLogs } from '@interfaces/responses';

@Component({
  selector: 'app-file-tables',
  templateUrl: './file-tables.component.html',
  styleUrls: ['./file-tables.component.css']
})
export class FileTablesComponent {
  _data: DataFilesLogs[] = []
  _loadData: boolean = false;

  @Input() set loadData (value: boolean) {
    this._loadData = value;
  }

  @Input() set data(value: DataFilesLogs[]) {
    this._data = value;
  }

  filter: string = '';
  page = 1;
  length = 20;

  onJson(x: string) {
    return JSON.parse(x)
  }

  next() {
    this.page += 1;
  }

  prev() {
    this.page -= 1;
  }
}

