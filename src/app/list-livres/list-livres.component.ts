import { Component, OnInit } from '@angular/core';
import { ILivre } from '../models/livre'
import { LivreService } from '../services/livre/livre.service';
import {CategorieService} from '../services/category/categorie.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  titre: string = "La liste des livres";
  width = 60;
  height = 80;
  affichage: boolean = false;
  onclick() {
     this.affichage = !this.affichage;
  }
livres :ILivre[]=[];
listeCategorie: string[] = [];
categorieId:string="all";

onNotify(event: number) {
  alert(event);
}

constructor(private serviceLivre:LivreService, private serviceCategorie:CategorieService) { }

ngOnInit(): void {
  this. getAllLivre();
  this.listeCategorie = this.serviceCategorie.getAllCategories();

}

ChangeCategory() {
     if(this.categorieId == "all") {
       this.getAllLivre();
      } else {
        this.serviceLivre.getLivresByCategories(this.categorieId)
          .subscribe(ls=> this.livres = ls);
     }

}

private getAllLivre() {
  this.serviceLivre.getAllLivre()
       .subscribe(lrs => this.livres = lrs)
}
}
