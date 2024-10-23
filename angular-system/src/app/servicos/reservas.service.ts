import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) {}

  public getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(environment.apiUrl + "/reservas");
  }

  public criarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(environment.apiUrl + "/reservas", reserva);
  }

  public aprovarReserva(id: number): Observable<Reserva> {
    return this.http.put<Reserva>(`${environment.apiUrl}/${id}/aprovar`, {});
  }

  public recusarReserva(id: number): Observable<Reserva> {
    return this.http.put<Reserva>(`${environment.apiUrl}/${id}/recusar`, {});
  }
}
