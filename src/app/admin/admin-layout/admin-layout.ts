import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  imports: [MegaMenu, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
  items: MegaMenuItem[] = [
    {
      label: 'Go to Dashboard',
      routerLink: ['/admin/dashboard'],    
      items: [[
        { 
          label: 'Dashboard Home', 
          routerLink: ['/admin/dashboard'],

        },
        { label: 'Test 1', routerLink: ['/admin/dashboard'] },
      ], [
        { label: 'Test 2', routerLink: ['/admin/dashboard'] },
        { label: 'Test 3', routerLink: ['/admin/dashboard'] },
      ], 
      [
        { label: 'Test 2', routerLink: ['/admin/dashboard'] },
        { label: 'Test 3', routerLink: ['/admin/dashboard'] },
      ]
      ]
    }, 
    {
      label: 'Manage Layouts',
      routerLink: ['/admin/layouts'],
    }
  ];

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
