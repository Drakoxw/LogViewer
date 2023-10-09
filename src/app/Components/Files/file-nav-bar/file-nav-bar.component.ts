import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-nav-bar',
  templateUrl: './file-nav-bar.component.html',
  styleUrls: ['./file-nav-bar.component.css']
})
export class FileNavBarComponent {
  _load: boolean = false;
  _list = [ 'Cargando...' ];

  @Input() set load(value: boolean) {
    this._load = value;
  }
  @Input() set list(value: string[]) {
    this._list = value;
  }

  @Output() newFile = new EventEmitter<string>();


  OnLoadNewFile(file: string) {
    console.log(file);

    this.newFile.emit(file);
  }

}
