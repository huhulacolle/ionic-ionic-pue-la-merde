import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blague } from './blague';

@Injectable({
  providedIn: 'root'
})
export class BlagueApiService implements HttpInterceptor {
  token = environment.token;
  url: string[];

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenReq = req.clone({
      setHeaders: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(tokenReq);
  }

  getBlagueLimite(): any {
    return this.http.get('https://www.blagues-api.fr/api//type/dark/random');
  }
}
