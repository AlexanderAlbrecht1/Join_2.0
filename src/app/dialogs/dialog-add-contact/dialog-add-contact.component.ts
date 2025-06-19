import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.model';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsComponent } from '../../main/contacts/contacts.component';

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
  dialog = inject(MatDialog);

  constructor(
    public ContactsService: ContactsService,
    private dialogRef: MatDialogRef<DialogAddContactComponent>
  ) {}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  async onSubmit() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;
      const newContact = this.ContactsService.createNewContact(formValues);
      await this.ContactsService.addContact(newContact);
      this.closeDialogWithRefresh();
      this.ContactsService.getContacts();
    } else {
      console.warn('Formular ungültig:', this.profileForm.value);
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  closeDialogWithRefresh() {
    this.dialogRef.close('refresh');
  }
}
