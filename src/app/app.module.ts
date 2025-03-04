import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AddTutorialComponent } from './components/tutorial/add-tutorial/add-tutorial.component';
// import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
// import { TutorialsListComponent } from './components/tutorial/tutorials-list/tutorials-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    // AddTutorialComponent,
    // TutorialDetailsComponent,
    // TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
