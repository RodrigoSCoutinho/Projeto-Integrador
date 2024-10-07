import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { SalutarToken } from '../models/SalutarToken';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public efetuarLogin(usuario: Usuario): Observable<SalutarToken>{
    return this.http.post<SalutarToken>(environment.apiUrl + "/login", usuario);
  }
}
