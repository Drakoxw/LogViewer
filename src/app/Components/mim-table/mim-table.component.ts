import { Component, OnDestroy, OnInit } from '@angular/core';
import { MimErrorResponse } from '@interfaces/responses';
import { MimError } from '@interfaces/responses';
import { MimErrorRequestPayload } from '@interfaces/request';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mim-table',
  templateUrl: './mim-table.component.html',
  styleUrls: ['./mim-table.component.css']
})
export class MimTableComponent implements OnInit, OnDestroy {
  page = 1;
  length = 20;
  filter: string = '';
  btnText = 'Cargando...';
  load: boolean = false;
  detail: Object | Array<any> = [];
  showDetail: boolean = false;
  date: string = '';
  subs: Subscription[] = [];
  idEnterprise: string = '';

  data: MimError[] = [];

  constructor(private http: HttpService, private toast: ToastrAlertService) {}

  ngOnInit(): void {
    this.load = true;
    this.subs[0] = this.http.MimErrors({}).subscribe({
      next: (res) => {
        if (res.error) { this.toast.error(res.msg); }
        this.btnText = 'Buscar'
        this.load = false;
        if (res.data) {
          this.data = res.data;
        }
      }
    });
  }

  ngOnDestroy(): void {

  }




  openDetail(data: Object | Array<any>) {
    this.detail = data;
    this.showDetail = true;
  }

  reload() {
    this.date = '';
    this.idEnterprise = '';
    this.refreshTable('Restaurando...')
  }

  refreshTable(text = '') {
    this.btnText = text ? text : 'Buscando...'
    this.load = true;
    const payload: MimErrorRequestPayload = { };
    if (this.idEnterprise) {
      payload.idEnterprise = Number(this.idEnterprise);
    }
    this.subs[1] = this.http.MimErrors(payload).subscribe((res) => {
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
