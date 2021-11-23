import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersComponent} from './burgers/burgers.component';
import { FritesComponent} from './frites/frites.component';
import { DessertsComponent} from './desserts/desserts.component';
import { MenuComponent} from './menu/menu.component';
import { BoissonsComponent} from './boissons/boissons.component';
import { SupplementsComponent} from './supplements/supplements.component';
import { PanierComponent} from './panier/panier.component';
import { CreationBurgerComponent } from './creation-burger/creation-burger.component';



const routes: Routes = [

  {path: 'burgers', component: BurgersComponent},
  {path: 'frites', component: FritesComponent},
  {path: 'desserts', component: DessertsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'boissons', component: BoissonsComponent},
  {path: 'supplements', component: SupplementsComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'creation-burger', component : CreationBurgerComponent},
  {path: '**', component: MenuComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
