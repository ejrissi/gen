import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { contactGuard } from './contact.guard';



const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'add', component:AddContactComponent,canActivate:[contactGuard]},
  {path: "updatecontact/:id", component: UpdateContactComponent},
  {path:"search by category",component:RechercheParCategorieComponent},
  {path:"search by Name",component:RechercheParNomComponent},
  {path: 'login', component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "contact", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
