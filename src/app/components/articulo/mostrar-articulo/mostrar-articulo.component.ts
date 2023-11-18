import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/Service/articulo.service';
import { ArticuloModel } from 'src/app/models/articulo';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {

  articulos!:ArticuloModel[];
  constructor(
    private articuloService:ArticuloService
  ) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos() {
    this.articuloService.getArticulos().subscribe(
      (data: any) => {
        console.log("Llegada de datos a articulos", data);
        this.articulos = data;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

}
