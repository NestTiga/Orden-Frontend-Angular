import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotonesModule } from '../botones/botones.module';



@NgModule({
  declarations: [
    CrearArticuloComponent,
    MostrarArticuloComponent
  ],
  imports: [
    CommonModule,
    BotonesModule, 
    ReactiveFormsModule
  ],
  exports: [
    CrearArticuloComponent,
    MostrarArticuloComponent
  ]
})
export class ArticuloModule { }
