import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'overview',
    loadComponent: () =>
      import('./pages/overview/overview.component').then(
        (m) => m.OverviewComponent
      ),
  },
  {
    path: 'listen',
    loadComponent: () =>
      import('./pages/listen/listen.component').then((m) => m.ListenComponent),
  },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
];
