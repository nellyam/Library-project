import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }
  getAllCategories():string[] {
      return ["Big data", "Database", "Front-End", "Back-End"];
  }
}
