import { Component, OnInit } from '@angular/core';

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
  livres=[
    {id:1,Name:"Big Data For Dummies",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51p6wBow%2B3L._SX389_BO1,204,203,200_.jpg",ShortDescription:"Big data management is one of the major challenges facing business, industry, and not-for-profit organizations",Price:98,Category:'Big data',Etoile:3},
    {id:2,Name:"Big Data",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/41JjodHnKHL._SX331_BO1,204,203,200_.jpg",ShortDescription:"Bernard Marr’s Data Strategy is a must-have guide to creating a robust data strategy",Price:120,Category:'Big data',Etoile:3.5},
    {id:3,Name:"Database Engineering",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51UvR3a63OL._SX379_BO1,204,203,200_.jpg",ShortDescription:"This book has been an evolving dream of ours for about five years. Laine came to the DBA role without any formal technical training.",Price:66,Category:'Database',Etoile:5},
    {id:4,Name:"Data-Intensive",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",ShortDescription:"The Big Ideas Behind Reliable, Scalable, and Maintainable Systems ",Price:66,Category:'Database',Etoile:4.2},
    {id:5,Name:"Angular",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",ShortDescription:"The Big Ideas Behind Reliable, Scalable, and Maintainable Systems ",Price:66,Category:'Front-End',Etoile:3.1},
    {id:6,Name:"Learning React",ImageUrl:"https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL.jpg", ShortDescription:"Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces ",Price:89,Category:'Front-End',Etoile:4.5},
    {id:7,Name:"Pro C# 7", ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/413Z89zzezL._SX348_BO1,204,203,200_.jpg",ShortDescription:"Dive in and discover why Pro C# has been a favorite of C# developers worldwide for over 15 years",Price:55.60,Category:'Back-End',Etoile:2.6},
    {id:8,Name:"Learning Node.js",ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/41NGBmeH1uL._SX403_BO1,204,203,200_.jpg",ShortDescription:"Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web",Price:98,Category:'Back-End',Etoile:4.6}];

listeCategorie: string[] = ["Big data", "Database", "Front-End", "Back-End"];
categorieId:string="all";
livreTemp:any[] = [];
ChangeCategory() {
     if(this.categorieId == "all") this.livres = this.livreTemp;
     this.livres = this.livreTemp.filter(p=> p.Category == this.categorieId);
}
  constructor() { }

  ngOnInit(): void {
    this.livreTemp = this.livres;
  }

}
