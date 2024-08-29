import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // HttpClient 및 HttpClientModule 추가

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // HttpClientModule을 imports에 추가
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any = { username: '', birthdate: '', age: '' };

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // 브라우저 환경에서만 sessionStorage 사용
      const storedUser = sessionStorage.getItem('user');
      if (!storedUser) {
        this.router.navigate(['/login']);
      } else {
        this.user = JSON.parse(storedUser);
      }
    }
  }

  onSave() {
    if (isPlatformBrowser(this.platformId)) {
      // 클라이언트의 세션 스토리지에 저장
      sessionStorage.setItem('user', JSON.stringify(this.user));

      // 서버에 업데이트된 사용자 정보를 전송
      this.http.post('http://localhost:3000/api/update-user', this.user).subscribe({
        next: () => {
          alert('Profile updated successfully!');
        },
        error: () => {
          alert('Failed to update profile.');
        }
      });
    }
  }
}