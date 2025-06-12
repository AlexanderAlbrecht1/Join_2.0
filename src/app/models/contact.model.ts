export class Contact {
  id ?: number;
  email ?: string;
  name ?: string;
  phone ?: string;
  color ?: string;
  initials ?: string;

  constructor(obj: any) {
    this.id = obj?.id || '';
    this.email = obj?.email || '';
    this.name = obj?.name || '';
    this.phone = obj?.phone || '';
    this.color = obj?.color || '#000000';
    this.initials = obj?.initials || 'UK';
  }
}
