import { Categorie } from "./categorie.model";

export class Contact {

    id! : number;
    name! : string;
    email! : string;
     date! : Date ;
     categorie! : Categorie;
 
     enabled?: boolean;
    }