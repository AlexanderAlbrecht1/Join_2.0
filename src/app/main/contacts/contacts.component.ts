import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddContactComponent } from '../../dialogs/dialog-add-contact/dialog-add-contact.component';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, MatIconModule, DialogAddContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  contacts: any[] = []; // Array to hold contacts

   readonly dialog = inject(MatDialog);

  constructor(private supabaseService: SupabaseService) {
    this.loadContacts();
  }

  async loadContacts() {
   this.contacts = await this.supabaseService.getContacts();
   console.log('Contacts loaded:', this.contacts);
  }

  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent);
  }

}
