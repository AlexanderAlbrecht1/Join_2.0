import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddContactComponent } from '../../dialogs/dialog-add-contact/dialog-add-contact.component';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, MatIconModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contacts: any[] = []; // Array to hold contacts

  readonly dialog = inject(MatDialog);

  constructor(private contactService: ContactsService) {

  }

  ngOnInit() {
    this.showConatacts();
  }

  async loadContacts() {
    this.contacts = await this.contactService.getContacts();
    console.log('Contacts loaded:', this.contacts);
  }

  sortContactsByName() {
     return this.contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  async showConatacts() {
    await this.loadContacts();
    this.contacts = this.sortContactsByName();
  }

  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent, {
      width: '1212px',
      maxWidth: 'none',
      height: '592px',
      maxHeight: 'none',
    });
  }
}
