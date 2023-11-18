import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('../components/clientes/clientes.module').then(
        (m) => m.ClientesModule
      ),
  },
  {
    path: 'articulos',
    loadChildren: () =>
      import('../components/articulos/articulos.module').then(
        (m) => m.ArticulosModule
      ),
  },
  {
    path: 'ordenes',
    loadChildren: () =>
      import('../components/ordenes/ordenes.module').then(
        (m) => m.OrdenesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
