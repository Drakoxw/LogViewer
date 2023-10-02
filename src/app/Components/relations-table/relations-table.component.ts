import { Component, OnDestroy, OnInit } from '@angular/core';
import { RelationsPayload } from '@interfaces/request';
import { DataRelationsLog } from '@interfaces/responses';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { logDev } from '@utils/console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-relations-table',
  templateUrl: './relations-table.component.html',
  styleUrls: ['./relations-table.component.css']
})
export class RelationsTableComponent implements OnInit, OnDestroy {
  idEnterprise: string = '';
  date: string = '';
  uuid: string = '';
  data:  DataRelationsLog[]= [];

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
    const payload: RelationsPayload = { date: this.date, uuid: this.uuid };
    this.subs[0] = this.http.RelationsLogs(payload).subscribe((res) => {
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

  reload() {
    this.date = '';
    this.idEnterprise = '';
    this.uuid = '';
    this.refreshTable('Restaurando...')
  }

  refreshTable(text = '') {
    this.btnText = text ? text : 'Buscando...'
    this.load = true;
    const payload: RelationsPayload = { date: this.date, uuid: this.uuid };
    logDev('payload',payload)
    if (this.idEnterprise) {
      payload.idEnterprise = Number(this.idEnterprise);
    }
    this.subs[1] = this.http.RelationsLogs(payload).subscribe((res) => {
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
