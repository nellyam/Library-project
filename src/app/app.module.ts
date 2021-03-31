import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EtoileComponent } from './etoile/etoile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemHeroService } from './back-end/backend';

@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    EtoileComponent,
    HomeComponent,
    NotFoundComponent,
    DetailLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.npmjs.com/package/angular-in-memory-web-api
