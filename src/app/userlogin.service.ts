import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserloginService {
  constructor(private httpclient: HttpClient) {}

  // baseUrl
  private baseUrl = 'http://localhost:2020/login';

  // wrting method to call rest controller from anular
  loginUser(login: Login): Observable<object> {
    return this.httpclient.post(`${this.baseUrl}`, login);
  }
}
