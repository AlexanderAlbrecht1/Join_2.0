import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-dialog-add-contact',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './dialog-add-contact.component.html',
  styleUrl: './dialog-add-contact.component.scss',
})
export class DialogAddContactComponent {

  constructor(public ContactsService: ContactsService) {}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;
      const newContact = this.ContactsService.createNewContact(formValues);
      this.ContactsService.addContact(newContact);
    } else {
      console.warn('Formular ungültig:', this.profileForm.value);
    }
  }
}
