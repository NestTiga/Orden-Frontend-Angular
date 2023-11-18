import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { RouterModule } from '@angular/router';
import { ClienteModule } from '../components/cliente/cliente.module';
import { ArticuloModule } from '../components/articulo/articulo.module';

@NgModule({
  declarations: [AddEditModalComponent],
  imports: [CommonModule, RouterModule.forChild([]), ClienteModule, ArticuloModule],
  exports: [AddEditModalComponent],
})
export class ModalModule {}
