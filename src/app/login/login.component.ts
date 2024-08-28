import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // CommonModule 추가
import { FormsModule } from '@angular/forms';  // FormsModule 추가

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // CommonModule과 FormsModule을 추가
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // 하드 코딩된 사용자 데이터
  users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
