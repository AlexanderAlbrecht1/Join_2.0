export class Contact {
  id ?: string;
  email ?: string;
  name ?: string;
  phone ?: string;
  color ?: string;

  constructor(obj: any) {
    this.id = obj?.id || '';
    this.email = obj?.email || '';
    this.name = obj?.name || '';
    this.phone = obj?.phone || '';
    this.color = obj?.color || '#000000';
  }
}
