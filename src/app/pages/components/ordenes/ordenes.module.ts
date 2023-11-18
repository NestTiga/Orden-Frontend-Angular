import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './ordenes.component';
import { OrdenModule } from 'src/app/components/orden/orden.module';


@NgModule({
  declarations: [
    OrdenesComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    OrdenModule
  ]
})
export class OrdenesModule { }
