import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule 추가
import { AuthService } from '../auth.service'; // AuthService 추가

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // HttpClientModule 추가
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}  // AuthService를 constructor에 추가

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['/account']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error: (error) => {
        this.errorMessage = 'Login failed: ' + error.message;
      }
    });
  }
}
