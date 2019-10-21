import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-objective',
  templateUrl: './learning-objective.component.html',
  styleUrls: ['./learning-objective.component.css']
})
export class LearningObjectiveComponent implements OnInit {
	// cliCommands = ['ng new', 'ng generate component', 'ng serve']

	flashCards = [
		{title: 'angular', desc: 'JavaScript framework to help us make killer apps'}, 
		{title: 'templates', desc: 'help our apps be flexible and easily extendable'},
		{title: 'components', desc: 'modularized pieces of angular code'}
	];

	
  constructor() { }

  ngOnInit() {
  }

}
