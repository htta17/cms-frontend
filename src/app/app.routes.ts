import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { authGuard } from './core/guard/auth-guard';
export const routes: Routes = [
  // Default route
  { 
    path: '', loadComponent: () => import('./home/home').then(m => m.Home) 
  },
  // Login
  {
    path: 'login',
    loadComponent: () => import('./admin/login/login').then(m => m.Login),
  },
  
  // Admin route
  {
    path: 'admin',
    component: AdminLayout,  
    canActivate: [authGuard],      
    children: [        
        {
          path: 'dashboard',
          loadComponent: () => import('./admin/dashboard/dashboard').then(m => m.Dashboard),
        }, 
        
        /** Layouts */
        {
          path: 'layouts/new',
          loadComponent: () => import('./admin/layout/layout-add/layout-add').then(m => m.LayoutAdd),
        },
        {
          path: 'layouts/:id',
          loadComponent: () => import('./admin/layout/layout-edit/layout-edit').then(m => m.LayoutEdit),
        },
        {
            path: 'layouts',
            loadComponent: () => import('./admin/layout/layout-list/layout-list').then(m => m.LayoutList)            
        },
        /* end of Layouts */

        /** Users */
        {
          path: 'users',
          loadComponent: () => import('./admin/users/user-list/user-list').then(m => m.UserList)
        }

    ]
  }, 

  
];
