import { Component } from '@angular/core';
import { ShipmentPayload } from '@interfaces/request';
import { DataShipmentLog } from '@interfaces/responses';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipment-table',
  templateUrl: './shipment-table.component.html',
  styleUrls: ['./shipment-table.component.css']
})
export class ShipmentTableComponent {
  idEnterprise: string = '';
  date: string = '';
  guide: string = '';
  data: DataShipmentLog[] = [];

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
    const payload: ShipmentPayload = { date: this.date, guide: this.guide };
    this.subs[0] = this.http.ShipmentLogs(payload).subscribe((res) => {
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
    this.guide = '';
    this.idEnterprise = '';
    this.refreshTable('Restaurando...')
  }

  refreshTable(text = '') {
    this.btnText = text ? text : 'Buscando...'
    this.load = true;
    const payload: ShipmentPayload = { date: this.date, guide: this.guide };

    if (this.idEnterprise) {
      payload.idEnterprise = Number(this.idEnterprise);
    }

    this.subs[1] = this.http.ShipmentLogs(payload).subscribe((res) => {
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
