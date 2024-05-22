import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { URL_API_BASE, URL_APP_OLD, URL_API_MIM_ERRORES } from '@constants/index';
import { logDev } from '@utils/index';
import {
  QuotePayload,
  RelationsPayload,
  ShipmentPayload,
  MimErrorRequestPayload,
} from '@interfaces/request';
import {
  DataFilesLogs,
  DataFilesLogsResponse,
  DataQuoteLogsRequest,
  DataRelationsLog,
  DataShipmentLog,
  DeleteLogsResponse,
  ListFilesLogsResponse,
  QuoteLogsResponse,
  RelationsLogsResponse,
  ShipmentLogsResponse,
  MimError,
  MimErrorResponse,
} from '@interfaces/responses';
import {
  DataFilesVoidResponse,
  MimErorVoidResponse,
  QuoteVoidResponse,
  RelationsVoidResponse,
  ShipmentVoidResponse,
} from '@mocks/index';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  private url = URL_API_BASE;

  private appUrl = URL_APP_OLD;

  private apiFlujosUrl = URL_API_MIM_ERRORES;

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    logDev('error http', err);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return of({ error: true, msg: errorMessage });
  }

  QuoteLogs(payload: QuotePayload): Observable<{
    error: boolean;
    msg: string;
    data?: DataQuoteLogsRequest[];
  }> {
    const res = { error: false, msg: '', data: [QuoteVoidResponse] };
    return this.http
      .get<QuoteLogsResponse>(
        `${this.url}/logs/quote-logs?x-limit=200&date=${
          payload.date ?? ''
        }&id-enterprise=${payload.idEnterprise ?? ''}`
      )
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  ShipmentLogs(payload: ShipmentPayload): Observable<{
    error: boolean;
    msg: string;
    data?: DataShipmentLog[];
  }> {
    const res = { error: false, msg: '', data: [ShipmentVoidResponse] };
    return this.http
      .get<ShipmentLogsResponse>(
        `${this.url}/logs/shipment-logs?x-limit=200&guide=${
          payload.guide
        }&date=${payload.date}&id-enterprise=${payload.idEnterprise ?? ''}`
      )
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  RelationsLogs(payload: RelationsPayload): Observable<{
    error: boolean;
    msg: string;
    data?: DataRelationsLog[];
  }> {
    const res = { error: false, msg: '', data: [RelationsVoidResponse] };
    return this.http
      .get<RelationsLogsResponse>(
        `${this.url}/logs/relation-logs?x-limit=200&uuid=${payload.uuid}&date=${
          payload.date
        }&id-enterprise=${payload.idEnterprise ?? ''}`
      )
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  GetFilesLogs(): Observable<{
    error: boolean;
    msg: string;
    data?: string[];
  }> {
    const res = { error: false, msg: '', data: ['No hay datos'] };
    return this.http
      .get<ListFilesLogsResponse>(`${this.appUrl}/index.php`)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  GetDataFilesLogs(file: string): Observable<{
    error: boolean;
    msg: string;
    data?: DataFilesLogs[];
  }> {
    const res = { error: false, msg: '', data: [DataFilesVoidResponse] };
    return this.http
      .get<DataFilesLogsResponse>(`${this.appUrl}/index.php?log=${file}`)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  DeleteFileLogs(file: string): Observable<{
    error: boolean;
    msg: string;
    data?: string[];
  }> {
    const res = { error: false, msg: '', data: [''] };
    return this.http
      .delete<DeleteLogsResponse>(`${this.appUrl}/index.php?log=${file}`)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

  MimErrors(payload: MimErrorRequestPayload): Observable<{
    data?: Array<MimError>;
    error: boolean;
    msg: string;
   }> {
    const response = { error: true, msg:"test", data: [MimErorVoidResponse] };
    return this.http
    .get<MimErrorResponse>(`${this.apiFlujosUrl}?id_empresa=${payload.idEnterprise ?? ''}&limit=${payload.limit?? 200}&page=${payload.page ?? 1}`
    )
    .pipe(
      map((r) => {
        response.error = !r.success;
        response.data = r.errores;
        return response
      }),
      catchError(this.error)

    )

  }
}
