import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarUsuarioGuard } from './guards/validar-usuario.guard';

 
const routes: Routes = [

        {
          /**Cuando presionen auth.. Se carga el modulo de auth */
          path: 'auth',
          loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule)
        },
        {
          /**Cuando presionen dashboard.. Se carga el modulo de dashboard */
          path: 'dashboard',
          loadChildren: () => import ('./interfell/interfell.module').then( m => m.InterfellModule),
         // canActivate:  [ ValidarUsuarioGuard],
          //canLoad:[ ValidarUsuarioGuard ]
        },
        {
          /**Cuando presionen cualquier ruta no definida*/
          path: '**',
          redirectTo:'auth'
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
