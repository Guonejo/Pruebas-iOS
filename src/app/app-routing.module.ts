import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';  // Si usas AuthGuard, mantén esto

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',  // Cambiado para que redirija al onboarding al iniciar la app
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then(m => m.HorarioPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then(m => m.ActividadesPageModule)
  },
  {
    path: 'bibliografia',
    loadChildren: () => import('./pages/bibliografia/bibliografia.module').then(m => m.BibliografiaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]  // Ruta protegida por AuthGuard
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cambio-password',
    loadChildren: () => import('./pages/cambio-password/cambio-password.module').then(m => m.CambioPasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)  // Ruta del onboarding
  },
  {
    path: '**',  // Ruta comodín para redirigir a home si la ruta no existe
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
