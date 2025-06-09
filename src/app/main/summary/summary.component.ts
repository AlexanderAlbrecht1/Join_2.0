import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent {

  greeting = '';
  initials = '';

  constructor(){
    this.greetings()
  }


  greetings() {
    const currentHour = new Date().getHours();

    console.log(currentHour);
    if (currentHour >= 1 && currentHour <= 10) {
      this.greeting = 'Good Morning,'
    } else
    if (currentHour >= 11 && currentHour <= 18) {
      this.greeting = 'Good afternoon,'
    } else {
      this.greeting = 'Good evening,'
    }
  }



}
