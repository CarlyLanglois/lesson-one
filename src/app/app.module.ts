import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearningObjectiveComponent } from './learning-objective/learning-objective.component';
import { CommandsComponent } from './learning-objective/commands/commands.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningObjectiveComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
