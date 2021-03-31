import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListLivresComponent } from './list-livres/list-livres.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { DetailLivreGuard } from './Guard/detail-livre.guard';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'livre/:id', component:DetailLivreComponent, canActivate:[DetailLivreGuard]},
  { path:'livres', component: ListLivresComponent },
  { path:'**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

