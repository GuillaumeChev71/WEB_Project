import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import { FritesComponent } from './frites/frites.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { PanierComponent } from './panier/panier.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { MenuComponent } from './menu/menu.component';
import { CreationBurgerComponent } from './creation-burger/creation-burger.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    FritesComponent,
    DessertsComponent,
    BoissonsComponent,
    PanierComponent,
    SupplementsComponent,
    MenuComponent,
    CreationBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
