import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  loggedUser: User;

  constructor() {
    this.loggedUser = {
      color : "#9747FF",
      email:"peter@spider.net",
      id:"1",
      initials:"PP",
      name:"Peter Parker",
      phone:"+49 161 1312 582"
    };
  }
}
