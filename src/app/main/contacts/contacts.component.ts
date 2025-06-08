import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  contacts: any[] = []; // Array to hold contacts

  constructor(private supabaseService: SupabaseService) {}

  async loadContacts() {
   this.contacts = await this.supabaseService.getContacts();
   console.log('Contacts loaded:', this.contacts);

  }

}
