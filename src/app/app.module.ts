import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogComponent } from './dog/dog.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { SubBreedComponent } from './sub-breed/sub-breed.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogComponent,
    SubBreedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
