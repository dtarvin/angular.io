import { AppRoutingModule }         from './app-routing.module';
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './app.component';
import { CrisisListComponent }      from './crisis-list/crisis-list.component';
import { HeroListComponent }        from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
