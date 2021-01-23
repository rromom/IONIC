import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./paginas/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./paginas/tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./paginas/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./paginas/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./paginas/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./paginas/cards/cards.module').then( m => m.CardsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
