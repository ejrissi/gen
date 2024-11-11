import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ServiceService } from '../services/service.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: []
})
export class RechercheParCategorieComponent implements OnInit {
  contact?: Contact[];
  categories?: Categorie[];
  IdCategorie!: number;

  constructor(private constr: ServiceService) {
    this.categories = this.constr.listeCategories();
    this.contact = this.constr.listecontacts();
  }

  ngOnInit(): void {
  
    this.IdCategorie = this.categories?.[0]?.idCat || 1;  
  }

  onChange() {
    console.log("Selected Category ID: ", this.IdCategorie); 
    this.contact = this.constr.rechercherParCategorie(this.IdCategorie);
    console.log("Filtered Contacts: ", this.contact); 
  }

  deletecontact(p: Contact) {
    let conf = confirm("Are you sure?");
    if (conf) {
      this.constr.deleteContact(p);
    }
  }
}
