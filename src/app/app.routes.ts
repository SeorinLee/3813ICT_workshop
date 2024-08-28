import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [  // export를 통해 routes 변수를 외부로 내보냅니다.
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent }
];
