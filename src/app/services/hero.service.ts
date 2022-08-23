// Notice that the new service imports the Angular Injectable symbol and annotates the class with the
//  @Injectable() decorator. This marks the class as one that participates in the 
//  dependency injection system. The HeroService class is going to provide an injectable 
// service, and it can also have its own injected dependencies. It doesn't have any dependencies yet.


import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// The @Injectable() decorator accepts a metadata object for the service,
//  the same way the @Component() decorator did for your component classes.
@Injectable({

  // When you provide the service at the root level, Angular creates a single, shared instance of HeroService and 
  // injects into any class that asks for it. Registering the provider in the @Injectable metadata 
  // also allows Angular to optimize an application by removing the service if it isn't used.
  
  providedIn: 'root'
})
export class HeroService {

  // This is an example of a typical service-in-service scenario
  // in which you inject the MessageService into the HeroService 
  // which is injected into the HeroesComponent.

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }
}
