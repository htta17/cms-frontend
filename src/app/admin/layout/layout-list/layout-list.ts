import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Layoutservice } from '../../../services/layoutservice';
import { Layout } from '../../../entity/Layout';

@Component({
  selector: 'app-layout-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './layout-list.html',
  styleUrl: './layout-list.scss',
})
export class LayoutList {
  layouts: Layout[] = [];
  loading = false;

  constructor(private svc: Layoutservice, private router: Router) {
    this.load();
  }

  load() {
    this.loading = true;
    this.svc.getLayouts().subscribe({
      next: (data) => {
        this.layouts = data || [];
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  goToNew() {
    this.router.navigate(['/admin/layouts/new']);
  }

  edit(id: number) {
    this.router.navigate(['/admin/layouts', id]);
  }

  delete(id: number) {
    if (!confirm('Delete this layout?')) return;
    this.svc.deleteLayout(id).subscribe({ next: () => this.load() });
  }
}
