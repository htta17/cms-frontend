import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form!: FormGroup;
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    console.log('Login form submitted', this.form.value);

    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    const { username, password } = this.form.value;
    const ok = await this.auth.login(username, password);
    this.loading = false;
    if (ok) {
      const redirect = this.auth.getRedirectUrl() || '/admin';
      this.router.navigateByUrl(redirect);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
