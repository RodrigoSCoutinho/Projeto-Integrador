
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartamento } from '../models/Apartamento';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ApartamentoService {
  

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(environment.apiUrl + "/apartamento");
  }

  buscarPorId(id: number): Observable<Apartamento> {
    return this.http.get<Apartamento>(`${environment.apiUrl}/${id}`);
  }

  criar(apartamento: Apartamento): Observable<Apartamento> {
    return this.http.post<Apartamento>(environment.apiUrl + "/apartamento", apartamento);
  }

  atualizar(id: number, apartamento: Apartamento): Observable<Apartamento> {
    return this.http.put<Apartamento>(`${environment.apiUrl}/${id}` + "/apartamento", apartamento);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${id}` + "/apartamento");
  }

  listarPorCondominio(condominioId: number): Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(`${environment.apiUrl}/condominio/${condominioId}`);
  }
}