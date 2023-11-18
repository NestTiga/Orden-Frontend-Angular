import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { ArticuloModel, nuevoArticulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private URL_API: string = config.URL_BASE + '/api/articulos';

  constructor(private http: HttpClient) {}

  getArticulos() {
    return this.http.get<ArticuloModel>(this.URL_API);
  }

  postArticulo(datos: nuevoArticulo) {
    return this.http.post<nuevoArticulo>(this.URL_API, datos);
  }

}
