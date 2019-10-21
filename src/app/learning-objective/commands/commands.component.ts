import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
	// cliCommands = ['ng new', 'ng generate component', 'ng serve']

	cliCommands = [
		{name: 'ng new', action: 'creates a new angular project'}, 
		{name: 'ng generate component', action: 'creates a new angular component'},
		{name: 'ng serve', action: 'serves the project on port 4200'}
	];

  constructor() { }

  ngOnInit() {
  }

}
