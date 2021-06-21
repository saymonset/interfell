import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InterfellRoutingModule } from './interfell-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    HomeComponent,
   
    ListadoComponent
  ],
  imports: [
    CommonModule,
    InterfellRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class InterfellModule { }
