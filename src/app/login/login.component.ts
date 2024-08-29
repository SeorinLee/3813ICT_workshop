import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // HttpClient와 HttpClientModule 가져오기
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // 필요한 모듈 추가
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = { email: this.email, password: this.password };
  
    this.http.post('http://localhost:3000/api/auth', loginData).subscribe({
      next: (response: any) => {
        // 로그인 성공 시 사용자 정보를 Session Storage에 저장
        sessionStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/account']);
      },
      error: (error) => {
        alert('Invalid email or password');
        
      }
    });
  }
}