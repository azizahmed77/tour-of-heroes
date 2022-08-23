// The ng serve command: 

//builds the application
//starts the development server
//watches source files
//rebuilds the application as you make changes
// the --open flag opens a browser to  http://localhost:4200.

// Components are the fundamental building blocks of Angular applications.
// They display data on the screen, listen for user input, and take action based on that input.

// The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() 
// shortly after creating a component. It's a good place to put initialization logic.

//Pipes are a good way to format strings,
//  currency amounts, dates, and other display data. 
//  Angular ships with several built-in pipes and you can create your own.

//Angular's class binding can add and remove a CSS class conditionally. 
//Add [class.some-css-class]="some-condition" to the element you want to style.

// used *ngFor to display a list.
// You used *ngIf to conditionally include or exclude a block of HTML.
// You can toggle a CSS style class with a class binding.

// . This tutorial splits up large components into smaller sub-components, 
// each focused on a specific task or workflow.

//Services are a great way to share information among classes that don't know each other.

// Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
//  The constructor shouldn't do anything. It certainly shouldn't call a 
//  function that makes HTTP requests to a remote server as a real data service would.


// --------------------- ROUTING -----------------------------------
// In Angular, the best practice is to load and configure the router in a separate, top-level module.
// The router is dedicated to routing and imported by the root AppModule.

// By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app directory.

// Run ng generate to create the application routing module.

// ng generate module app-routing --flat --module=app

// PARAMETER	DETAILS
// --flat	Puts the file in src/app instead of its own directory.
// --module=app	Tells ng generate to register it in the imports array of the AppModule.

// A typical Angular Route has two properties:
// PROPERTIES	    DETAILS
// path             A string that matches the URL in the browser address bar.
// component	    The component that the router should create when navigating to this route.
