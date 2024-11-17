import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Condominio } from '../models/Condominio';

@Injectable({
  providedIn: 'root'
})
export class CondominioService {

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Condominio[]> {
    return this.http.get<Condominio[]>(environment.apiUrl + "/condominio");
  }

  buscarPorId(id: number): Observable<Condominio> {
    return this.http.get<Condominio>(`${environment.apiUrl}/condominio/${id}`);
  }

  criar(condominio: Condominio): Observable<Condominio> {
    return this.http.post<Condominio>(environment.apiUrl + "/condominio", condominio);
  }

  atualizar(id: number, condominio: Condominio): Observable<Condominio> {
    return this.http.put<Condominio>(`${environment.apiUrl}/condominio/${id}`, condominio);
  }

  deletar(id: number): Observable<void> {
     return this.http.delete<void>(`${environment.apiUrl}/condominio/${id}`);
  }

  buscarPorNome(nome: string): Observable<Condominio[]> {
    return this.http.get<Condominio[]>(`${environment.apiUrl}/busca?nome=${nome}`);
  }
}
