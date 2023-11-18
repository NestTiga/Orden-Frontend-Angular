import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotonesModule } from '../botones/botones.module';



@NgModule({
  declarations: [
    CrearOrdenComponent
  ],
  imports: [
    CommonModule,
    BotonesModule, 
    ReactiveFormsModule
  ],
  exports:[
    CrearOrdenComponent
  ]
})
export class OrdenModule { }
