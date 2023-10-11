import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-nav-bar',
  templateUrl: './file-nav-bar.component.html',
  styleUrls: ['./file-nav-bar.component.css']
})
export class FileNavBarComponent {
  _load: boolean = false;
  _list = [ 'Cargando...' ];

  selected = '';
  search: string = '';

  delete = '';
  showModal = false;

  @Input() set load(value: boolean) {
    this._load = value;
  }
  @Input() set list(value: string[]) {
    this._list = value;
    this.selected = this._list[0];
  }

  @Output() newFile = new EventEmitter<string>();
  @Output() deleteFile = new EventEmitter<string>();

  OnLoadNewFile(file: string) {
    this.newFile.emit(file);
    this.selected = file;
  }

  toogleModal() {
    this.showModal = !this.showModal;
  }

  onPrepareDelete(file: string) {
    this.delete = file;
    this.toogleModal();
  }

  onDeleteFile() {
    this.toogleModal();
    this.deleteFile.emit(this.delete);
    this.delete = '';
  }

}
