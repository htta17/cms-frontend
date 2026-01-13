import { Component, ViewChild } from '@angular/core';
import { User } from '../../../entity/User';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-list',
  imports: [TableModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  @ViewChild('dt') table!: Table;

  users: User[] = [];
  loading = false;

  roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' },
    { label: 'Manager', value: 'Manager' }
  ];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;

    // Mock data – replace with API call
    setTimeout(() => {
      this.users = [
        {
          id: 1,
          username: 'John Doe',
          email: 'john@example.com',
          roles: ['Admin'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane@example.com',
          roles: ['User'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          username: 'Mike Johnson',
          email: 'mike@example.com',
          roles: ['Manager'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      this.loading = false;
    }, 500);
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    // navigate to edit page or open dialog
  }

  deleteUser(user: User): void {
    if (!confirm(`Delete user ${user.username}?`)) {
      return;
    }

    this.users = this.users.filter(u => u.id !== user.id);
  }

  clearFilters(): void {
    this.table.clear();
  }
}
