import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private URL_API: string = config.URL_BASE + '/api/ordenes/crear';

  constructor(private http: HttpClient) { }

  postOrden(datos: any) {
   var clienteId={
    clienteId:datos.orden_general.clienteId
    }
    const datos_envio = {
      fecha:datos.orden_general.fecha,
      cliente:clienteId,
      articulos: datos.orden_detalle,
    };
    console.log("Antes de guardar orden", datos);
    console.log("Datos formateados", datos_envio);
    return this.http.post<any>(this.URL_API, datos_envio);
  }

}
