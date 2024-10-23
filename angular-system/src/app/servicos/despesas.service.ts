import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../models/Despesa';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) {}

  pegarDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(environment.apiUrl + "/despesas");
  }

  criarDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(environment.apiUrl + "/despesas", despesa);
  }
}
