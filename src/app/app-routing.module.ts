import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './layout/layout';
import { AdminModule } from './pages/admin/admin.module';

const routes: Routes = [
  {
    path: '',
    data: { layout: Layouts.Full },
    children: [{ path: '', loadChildren: () => AdminModule }],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
