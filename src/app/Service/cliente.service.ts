import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { ClientesModel, nuevoCliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL_API: string = config.URL_BASE + '/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<ClientesModel>(this.URL_API);
  }

  postCliente(datos: nuevoCliente) {
    return this.http.post<nuevoCliente>(this.URL_API, datos);
  }

  deleteCliente(id: number) {
    return this.http.delete<ClientesModel>(this.URL_API + '/' + id);
  }

  putCliente(form: any) {
    return this.http.put<any>(
      this.URL_API,
      form
    );
  }

}
