import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ccaa',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ccaa',
    loadChildren: () => import('./pages/ccaa/ccaa.module').then( m => m.CcaaPageModule)
  },
  {
    path: 'municipios',
    loadChildren: () => import('./pages/municipios/municipios.module').then( m => m.MunicipiosPageModule)
  },
  {
    path: 'provincias',
    loadChildren: () => import('./pages/provincias/provincias.module').then( m => m.ProvinciasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
