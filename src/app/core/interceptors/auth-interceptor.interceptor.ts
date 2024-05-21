import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private storageServ: LocalstorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken
    req.url.includes('apiflujos.com')
    ?  authToken ='Bearer BJyvwJrYsOJVaps0HoSKi-0N6ig-w6R7'
    :  authToken = this.storageServ.getToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    return next.handle(authReq);
  }
}
