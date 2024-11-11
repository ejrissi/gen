import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  categories!: Categorie[];
  newIdCat!: number;
  newcontact: Contact = new Contact();
  nameMinLength: number = 3;

  constructor(private addon: ServiceService, private rou: Router) {}

  ngOnInit() {
    this.categories = this.addon.listeCategories();
  }

  addContact() {
   
    if (!this.newcontact.name || !this.newcontact.email || !this.newcontact.date || !this.newIdCat) {
      alert('Please fill in all required fields.');
      return;
    }

    
    if (this.newcontact.name.length < this.nameMinLength) {
      alert(`Name must be at least ${this.nameMinLength} characters long.`);
      return;
    }

   
    if (this.newcontact.email.indexOf('@') === -1 || this.newcontact.email.indexOf('.') === -1) {
      alert('Please enter a valid email address.');
      return;
    }

    this.newcontact.categorie = this.addon.consulterCategorie(this.newIdCat);
    this.addon.addcontact(this.newcontact);
    this.rou.navigate(['contact']);
  }
}
