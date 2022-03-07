import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { BreedComponent } from './breed/breed.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { SubBreedComponent } from './sub-breed/sub-breed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { FilterDogsPipe } from './filter-dogs.pipe';
import { HighlighterPipe } from './highlighter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    BreedComponent,
    SubBreedComponent,
    NotFoundComponent,
    FilterDogsPipe,
    HighlighterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
