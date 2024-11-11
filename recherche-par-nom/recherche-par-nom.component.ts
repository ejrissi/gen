import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl:'./recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {
  contacts!: Contact[]; 
  searchName: string = '';

  constructor(private constr: ServiceService) {
    this.contacts = this.constr.listecontacts();
  }

  ngOnInit(): void {}

  onSearch() {
    console.log("Searching for Name: ", this.searchName);
    this.contacts = this.constr.rechercherParNom(this.searchName);
    console.log("Filtered Contacts: ", this.contacts); 
  }

  deleteContact(p: Contact) {
    let conf = confirm("Are you sure?");
    if (conf) {
      this.constr.deleteContact(p);
      this.contacts = this.constr.listecontacts();
    }
  }
}
