import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []
  // don't assign any value to it since there is no selected hero when the application starts.
  selectedHero?: Hero;
  
  // The parameter simultaneously defines a private heroService property
  //  and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  // While you could call getHeroes() in the constructor, that's not the best practice.
  // Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
  // at an appropriate time after constructing a HeroesComponent instance.

  ngOnInit(): void {
    this.getHeroes()
  }

  //this method assigns the clicked hero from the template to the component's selectedHero.
  onSelectHero(hero: Hero): void {
    console.log(hero)
    this.selectedHero = hero
    // display a history of each time the user clicks on a hero. 
    //This helps when you get to the next section on Routing.
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  //Create a method to retrieve the heroes from the service.
  getHeroes(): void {
    // waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. 
    // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
   this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }


}
