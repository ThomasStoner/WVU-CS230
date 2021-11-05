import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth.component';
import { CollectionsComponent } from './pages/collections.component';
import { HomeComponent } from './pages/home.component';
import { MoviesComponent } from './pages/movies.component';
import { MyAccountComponent } from './pages/my-account.component';
import { MyListComponent } from './pages/my-list.component';
import { SeriesComponent } from './pages/series.component';
import { ShudderTVComponent } from './pages/shudder-tv.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'collections', component: CollectionsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'shudder-tv', component: ShudderTVComponent},
  { path: 'my-list', component: MyListComponent},
  { path: 'my-account', component: MyAccountComponent},
  { path: 'auth', component: AuthComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
