import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILivre } from '../models/livre';
import { LivreService } from '../services/livre/livre.service';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serviceLivre: LivreService) { }
  livre:ILivre|undefined;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.serviceLivre.getLivreById(Number(id)).subscribe(livre => {
      this.livre=livre
      console.log(this.livre);
    });
    console.log(id);
    console.log(this.livre);
  }

}
