import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  // The hero property must be an Input property, annotated with the @Input() decorator,
  // because the external HeroesComponent binds to it like this.
  @Input() hero?: Hero 

  constructor() { }

  ngOnInit(): void {
  }

}

// That's the only change you should make to the HeroDetailComponent class. There are no more properties. 
// There's no presentation logic. 
// This component only receives a hero object through its hero property and displays it.
