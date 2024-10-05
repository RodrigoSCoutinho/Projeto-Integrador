import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { SalutarToken } from '../models/SalutarToken';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public login(usuario: Usuario): Observable<SalutarToken>{
    return this.http.post<SalutarToken>(environment.apiUrl + "/login", usuario);
  }
}
