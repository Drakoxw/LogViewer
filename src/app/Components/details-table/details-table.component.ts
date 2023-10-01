import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css'],
})
export class DetailsTableComponent {
  @Input() detail: Object | Array<any> = [];
  @Output() close = new EventEmitter<boolean>();

  constructor(
    private toast: ToastrAlertService,
    private clipboard: Clipboard
  ) {}

  closer() {
    this.close.emit(true);
  }

  copy() {
    this.toast.success('Copiado al portapapeles');
    this.clipboard.copy(JSON.stringify(this.detail));
  }
}
