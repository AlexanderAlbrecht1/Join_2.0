import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./main/navbar/navbar.component";
import { HeaderComponent } from './main/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Join_2_0';
}
