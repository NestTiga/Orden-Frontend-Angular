import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
  ],
})
export class LayoutModule {}
