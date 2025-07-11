import { Component } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  imports: [],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  selectedContact: any;

  constructor(private contactService: ContactsService) {

  }

  ngOnInit() {
    this.contactService.selectedContact$.subscribe((contact) => {
      this.selectedContact = contact;
      console.log('Kontakt empfangen:', contact);
    });
  }

}
