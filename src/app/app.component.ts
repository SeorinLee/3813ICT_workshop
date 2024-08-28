import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule 추가

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // RouterModule을 imports에 추가
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
}
