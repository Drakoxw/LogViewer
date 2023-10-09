import { Component } from '@angular/core';
import { CLICK } from '@constants/index';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent {
  click = CLICK

  table: string = CLICK.cotizaciones

  change(table: string) {
    this.table = table
  }
}
