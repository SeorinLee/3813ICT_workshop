import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  user: any = { username: '', birthdate: '', age: '' };

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = sessionStorage.getItem('user');
      if (!storedUser) {
        this.router.navigate(['/login']);
      } else {
        this.user = JSON.parse(storedUser);
      }
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}