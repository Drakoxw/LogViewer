import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuotePayload } from '@interfaces/request';
import { DataQuoteLogsRequest } from '@interfaces/responses';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { logDev } from '@utils/console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quote-table',
  templateUrl: './quote-table.component.html',
  styleUrls: ['./quote-table.component.css'],
})
export class QuoteTableComponent implements OnInit, OnDestroy {
  idEnterprise: string = '';
  date: string = '';
  data: DataQuoteLogsRequest[] = [];

  btnText = 'Cargando...'
  load: boolean = false;
  filter: string = '';
  page = 1;

  length = 20;

  subs: Subscription[] = [];
  detail: Object | Array<any> = [];
  showDetail: boolean = false;

  constructor(private http: HttpService, private toast: ToastrAlertService) {}

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.load = true;
    this.subs[0] = this.http.QuoteLogs({}).subscribe((res) => {
      if (res.error) { this.toast.error(res.msg); }
      this.btnText = 'Buscar'
      this.load = false;
      if (res.data) {
        this.data = res.data;
      }
    });
  }

  openDetail(data: Object | Array<any>) {
    this.detail = data;
    this.showDetail = true;
  }

  refreshTable() {
    this.btnText = 'Buscando...'
    this.load = true;
    const payload: QuotePayload = { date: this.date };
    if (this.idEnterprise) {
      payload.idEnterprise = Number(this.idEnterprise);
    }
    this.subs[1] = this.http.QuoteLogs(payload).subscribe((res) => {
      if (res.error) { this.toast.error(res.msg); }
      this.btnText = 'Buscar'
      this.load = false;
      if (res.data) {
        this.data = res.data;
      }
    });
  }

  next() {
    this.page += 1;
  }

  prev() {
    this.page -= 1;
  }
}
