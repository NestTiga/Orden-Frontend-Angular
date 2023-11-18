import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { ArticuloModule } from 'src/app/components/articulo/articulo.module';


@NgModule({
  declarations: [
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ArticuloModule
  ]
})
export class ArticulosModule { }
