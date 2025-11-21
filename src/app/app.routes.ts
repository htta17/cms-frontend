import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  
  // Admin route
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/dashboard/dashboard').then(m => m.Dashboard), 
    children: [
        {
          path: 'dashboard',
          loadComponent: () => import('./admin/dashboard/dashboard').then(m => m.Dashboard),
        }, 
        {
            path: 'layouts',
            loadComponent: () => import('./admin/layout/layout-list/layout-list').then(m => m.LayoutList),
        }
    ]
  }
];
