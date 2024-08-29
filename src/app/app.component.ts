import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  get isLoggedIn(): boolean {
    // 브라우저 환경인지 확인
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined' && sessionStorage.getItem('currentUser') !== null;
  }

  logout() {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('currentUser');
      window.location.reload();
    }
  }
}
