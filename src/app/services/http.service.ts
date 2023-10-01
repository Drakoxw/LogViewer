import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { URL_API_BASE } from '@constants/index';
import { logDev } from '@utils/index';
import { QuotePayload } from '@interfaces/request';
import { DataQuoteLogsRequest, QuoteLogsResponse } from '@interfaces/responses';
import { QuoteVoidResponse } from '@mocks/index';


@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private http = inject(HttpClient)

  private url = URL_API_BASE;

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    logDev('error http', err)
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return of({ error: true, msg: errorMessage });
  }

  QuoteLogs(payload: QuotePayload): Observable<{
    error: boolean
    msg: string
    data?: DataQuoteLogsRequest
  }> {
    const res = { error: false, msg: '', data: QuoteVoidResponse };
    return this.http.get<QuoteLogsResponse>(`${this.url}/logs/quote-logs?date=${payload.date ?? ''}&id-enterprise=${payload.idEnterprise ?? ''}`)
      .pipe(
        map((r) => {
          res.msg = r.message;
          res.data = r.data;
          return res;
        }),
        catchError(this.error)
      );
  }

}
