import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  
  // Admin route
  {
    path: 'admin',
    component: AdminLayout,        
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
