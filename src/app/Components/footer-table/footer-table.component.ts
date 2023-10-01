import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-table',
  templateUrl: './footer-table.component.html',
  styleUrls: ['./footer-table.component.css']
})
export class FooterTableComponent {
  @Output() nextPage = new EventEmitter<number>();
  @Output() prevPage = new EventEmitter<number>();
  @Output() goToPage = new EventEmitter<number>();
  _page: number = 0;
  _total: number = 0;
  pages: number[] = [];
  @Input() set total(value: number) {
    this._total = value;
    this.definePages();
  }
  @Input() limit: number = 0;
  @Input() set page(value: number) {
    this._page = value;
  }

  onNext() {
    if ((this._page - 1 ) * this.limit + this.limit < this._total) {
      this.nextPage.emit(this._page + 1);
    }
  }

  onPrev() {
    if (this._page == 1) {
      return;
    }
    this.prevPage.emit(this._page - 1);
  }

  goTo(page: number) {
    this.goToPage.emit(page);
  }

  definePages() {
    if (this._total > 0 && this.limit > 0) {
      this.pages = Array(Math.ceil(this._total / this.limit)).fill(0).map((x, i) => i + 1)
    }
  }
}
