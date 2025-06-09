import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
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
    const { data, error } = await this.supabase
      .from('contacts')
      .select('*')
      if (error) throw error;
  return data;
  }

}
