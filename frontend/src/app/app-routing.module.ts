import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchComponent } from './search/search.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'aboutUs', component:AboutUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
