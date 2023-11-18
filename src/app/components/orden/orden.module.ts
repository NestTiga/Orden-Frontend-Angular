import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';



@NgModule({
  declarations: [
    CrearOrdenComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CrearOrdenComponent
  ]
})
export class OrdenModule { }
