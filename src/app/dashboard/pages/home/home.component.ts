import { Component } from '@angular/core';
import { User } from '../users/models';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public authUser$: Observable<User | null>;
  public todayDate : Date = new Date();

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }
}
