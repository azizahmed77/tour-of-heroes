import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
//   This tells the router to match that URL to path: 'heroes' 
//   and display the HeroesComponent when the URL is something like localhost:4200/heroes.
    {path: 'dashboard', component: DashboardComponent},
    //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
 ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// First, the app-routing.module.ts file imports RouterModule and Routes
//  so the application can have routing capability. 
//  The next import, HeroesComponent, gives the Router somewhere to go once you configure the routes.