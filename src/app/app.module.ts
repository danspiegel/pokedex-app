import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokedexModule } from './pokedex/pokedex.module';
import { RollOnScrollDirective } from './roll-on-scroll.directive';
import { AppRoutingModule } from './pokedex/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RollOnScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PokedexModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
