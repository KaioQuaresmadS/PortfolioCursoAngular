import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpregadorService {
  private apiUrl = 'https://localhost:7117/api/EmpregadoMaster';
  constructor(private http: HttpClient) { }

  postEmpregador(empregador: any) {
    return this.http.post(this.apiUrl, empregador)
  }
}
