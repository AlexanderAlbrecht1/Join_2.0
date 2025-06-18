import { Contact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get client() {
    return this.supabase;
  }

  async getContacts() {
    const { data, error } = await this.supabase.from('contacts').select('*');
    if (error) throw error;
    return data;
  }

  async addContact(contact: Contact) {
    const { error } = await this.supabase.from('contacts').insert(contact);
    if (error) {
      console.error('Fehler beim Einfügen:', error.message);
    }
  }

  generateInitials(name: string): string {
    const parts = name.trim().split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name.slice(0, 2).toUpperCase();
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  generateColor(): string {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + hex.padStart(6, '0').toUpperCase();
  }

  createNewContact(formValues: any) {
    const newContact = new Contact({
      ...formValues,
      id: this.generateId(),
      color: this.generateColor(),
      initials: this.generateInitials(formValues.name ?? ''),
    });
    return newContact;
  }
}
