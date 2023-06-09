export class Contact {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public imageUrl: string;
    public group: string;
  
    constructor(id: number, name: string, email: string, phone: string, imageUrl: string, group: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.imageUrl = imageUrl;
      this.group = group;
    }

  }