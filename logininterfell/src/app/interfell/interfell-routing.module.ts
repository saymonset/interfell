import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
 

const routes: Routes = [
  {

    path:'',
    component: HomeComponent,
    children:[
            {path:'dashboard', component: ListadoComponent},
            {path:'**', component: ListadoComponent},
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfellRoutingModule { }
