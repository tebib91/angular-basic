import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/portfolio/portfolio.component').then(mod => mod.PortfolioComponent)},
];
