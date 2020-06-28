import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    GraficoBarraHorizontalComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GraficoBarraHorizontalComponent,
    NavBarComponent
  ]
})
export class ComponentsModule { }
