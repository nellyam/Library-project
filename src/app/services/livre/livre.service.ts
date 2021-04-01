import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //objet qui émet des info
import { ILivre } from 'src/app/models/livre';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }

  getAllLivre():Observable<ILivre[]> {
    return this.http.get<ILivre[]>('api/livres').pipe(
      map(l=>l)
    );
   }
  getLivresByCategories(categorie: string): Observable<ILivre[]> {
    return this.getAllLivre().pipe(map(x=>x.filter(p=>p.Category==categorie)))
  }

  getLivreById(id:number):Observable<ILivre> {
        return this.getAllLivre().pipe(
          map(livres => {
            return livres.find(p => p.id == id) as ILivre })
       )
  }
}

//La méthode map d'Observable fonctionne de la même manière que la méthode du même nom sur les tableaux:
//elle prend des valeurs en entrée, les transforme et les renvoie en sortie.
