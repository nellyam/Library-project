import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {
  @Input() rate:number=0;
  @Output() notify:EventEmitter<number> = new EventEmitter();
  
  onChange() {
    this.notify.emit(this.rate);
  }
  constructor() { }
  ngOnInit(): void {
  }


}
