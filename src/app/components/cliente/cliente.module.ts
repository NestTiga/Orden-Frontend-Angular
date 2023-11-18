import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { MostrarClienteComponent } from './mostrar-cliente/mostrar-cliente.component';
import { BotonesModule } from '../botones/botones.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    MostrarClienteComponent
  ],
  imports: [
    CommonModule,
    BotonesModule, 
    ReactiveFormsModule
  ],
  exports:[
    CrearClienteComponent,
    EditarClienteComponent,
    MostrarClienteComponent
  ]
})
export class ClienteModule { }
