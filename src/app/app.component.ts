import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule 추가
import { HttpClientModule } from '@angular/common/http'; // 만약 이곳에서 직접 HttpClient를 사용할 경우

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule], // RouterModule을 imports에 추가
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
}
