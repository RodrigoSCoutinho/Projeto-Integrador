import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/Signup';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {

  constructor(private http: HttpClient) { }

  public criarUsuario(usuario: Signup){
    return this.http.post(environment.apiUrl + "/usuarios", usuario);
  }
}
