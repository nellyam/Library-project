import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
