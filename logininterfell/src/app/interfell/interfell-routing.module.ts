import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
 

const routes: Routes = [
  {
    path:'',
    children:[
            {path:'', component: HomeComponent},
            {path:'**', redirectTo: ''},
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfellRoutingModule { }
