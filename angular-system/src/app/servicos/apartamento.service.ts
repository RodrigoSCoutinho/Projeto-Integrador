
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
    return this.http.get<Apartamento[]>(environment.apiUrl + "/apartamentos");
  }

  buscarPorId(id: number): Observable<Apartamento> {
    return this.http.get<Apartamento>(`${environment.apiUrl}/condominio/${id}`);
  }

  salvarApartamentos(apartamento: Apartamento): Observable<Apartamento> {
    return this.http.post<Apartamento>(environment.apiUrl + "/apartamentos", apartamento);
  }

  atualizar(id: number, apartamento: Apartamento): Observable<Apartamento> {
    return this.http.put<Apartamento>(`${environment.apiUrl}/${id}` + "/apartamentos", apartamento);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/apartamentos/${id}`);
  }

  listarPorCondominio(condominioId: number): Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(`${environment.apiUrl}/condominio/${condominioId}`);
  }
}