import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  idExists(idclient: any) {
    throw new Error('Method not implemented.');
  }
  contact: Contact[];
  contactRecherche: Contact[] = [];
  categories: Categorie[];
  contacts!: Contact;
  categorie: Categorie = new Categorie();
  listee: any;

  constructor() {
    this.categories = [
      { idCat: 1, nomCat: "friend" },
      { idCat: 2, nomCat: "close friend" },
      { idCat: 3, nomCat: "family" }
    ];

    this.contact = [
      { id: 1, name: 'ahmed', email: 'ahmedmej@gmail.com', date: new Date('01/14/2024'), categorie: { idCat: 1, nomCat: "friend" } },
      { id: 2, name: 'mouna', email: 'mounamejrissi@gmail.com', date: new Date('01/14/2024'), categorie: { idCat: 2, nomCat: "close friend" } },
      { id: 3, name: 'chames', email: 'chamesrays@gmail.com', date: new Date('01/14/2024'), categorie: { idCat: 3, nomCat: "family" } }
    ];
  }

  listecontacts(): Contact[] {
    return this.contact;
  }

  addcontact(prod: Contact) {
    this.contact.push(prod);
  }

  deleteContact(prod: Contact) {
    const index = this.contact.indexOf(prod, 0);
    if (index > -1) {
      this.contact.splice(index, 1);
    }
  }

  consultercontact(id: number): Contact {
    this.contacts = this.contact.find(p => p.id == id)!;
    return this.contacts;
  }

  updatecontact(p: Contact) {
    this.deleteContact(p);
    this.addcontact(p);
    this.tricontact();
  }

  tricontact() {
    this.contact = this.contact.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    this.categorie = this.categories.find(cat => cat.idCat == id) || new Categorie();
    return this.categorie;
  }

  rechercherParCategorie(idCat: number): Contact[] {
    this.contactRecherche = [];
    this.contact.forEach((cur) => {
      if (Number(idCat) === Number(cur.categorie.idCat)) {
        this.contactRecherche.push(cur);
      }
    });
    return this.contactRecherche;
  }

  rechercherParNom(name: string): Contact[] {
    if (!name) {
      return this.listecontacts(); 
    }
    this.contactRecherche = this.contact.filter(contact => 
      contact.name && contact.name.toLowerCase().includes(name.toLowerCase())
    );
    return this.contactRecherche;
  }
  
}
