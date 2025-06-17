import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';


  constructor(private supabase: SupabaseService, private router: Router) { }

  async signUp() {
    if (this.password !== this.confirmPassword) {
      alert("Passwörter stimmen nicht überein!");
      return;
    }

    try {
      const result = await this.supabase.signUp(this.email, this.password);
      console.log('Erfolgreich registriert:', result);

      this.router.navigate(['/sign-in']);
    } catch (error) {
      console.error('Registrierung fehlgeschlagen:', error);
      alert(JSON.stringify(error));
    }
  }
}
