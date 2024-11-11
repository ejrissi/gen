import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
})
export class UpdateContactComponent implements OnInit {
  curcontact: Contact = new Contact();
  categories!: Categorie[];
  updatedCatId!: number;
  nameMinLength: number = 3;

  constructor(
    private route: ActivatedRoute,
    private rou: Router,
    private ser: ServiceService
  ) {}

  ngOnInit(): void {
    this.categories = this.ser.listeCategories();
    this.curcontact = this.ser.consultercontact(this.route.snapshot.params['id']);
    this.updatedCatId = this.curcontact.categorie.idCat;
  }

  updateContact() {

    if (!this.curcontact.name || !this.curcontact.email || !this.curcontact.date || !this.updatedCatId) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.curcontact.name.length < this.nameMinLength) {
      alert(`Name must be at least ${this.nameMinLength} characters long.`);
      return;
    }

    if (this.curcontact.email.indexOf('@') === -1 || this.curcontact.email.indexOf('.') === -1) {
      alert('Please enter a valid email address.');
      return;
    }

    this.curcontact.categorie = this.ser.consulterCategorie(this.updatedCatId);
    this.ser.updatecontact(this.curcontact);
    this.rou.navigate(['contact']);

    
  }
}
