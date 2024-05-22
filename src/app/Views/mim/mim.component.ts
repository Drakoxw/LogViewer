import { Component } from '@angular/core';
import { CLICK } from '@constants/common';

@Component({
  selector: 'app-mim',
  templateUrl: './mim.component.html',
  styleUrls: ['./mim.component.css']
})
export class MimComponent {

  click = CLICK

  table: string = CLICK.mim

  change(table: string) {
    this.table = table
  }

}
