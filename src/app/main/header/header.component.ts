import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTooltipModule} from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [MatTooltipModule, RouterLink, MatMenuModule, MatMenuTrigger],
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

  LogOut() {
    // später Log out implementieren
    console.log("erfolgreich ausgeloggt");
  }
}
