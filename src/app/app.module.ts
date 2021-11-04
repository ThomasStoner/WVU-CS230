import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { NewlyAddedCardsComponent } from './homeCards/newly-added-cards.component';
import { CollectionsComponent } from './pages/collections.component';
import { HomeComponent } from './pages/home.component';
import { MoviesComponent } from './pages/movies.component';
import { MyAccountComponent } from './pages/my-account.component';
import { MyListComponent } from './pages/my-list.component';
import { SeriesComponent } from './pages/series.component';
import { ShudderTVComponent } from './pages/shudder-tv.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionType1Component } from './collectionParts/collection-type-1.component';
import { CollectionType2Component } from './collectionParts/collection-type-2.component';
import { SubHeaderNavBarComponent } from './moviesParts/sub-header-nav-bar.component';
import { MovieCardsComponent } from './moviesParts/movie-cards.component';
import { MajorCardsComponent } from './seriesParts/major-cards.component';
import { MinorCardsComponent } from './seriesParts/minor-cards.component';
import { ListComponent } from './myList/list.component';
import { HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './header/user-info-component';
import { EditAccount } from './myAccount/edit-account.component';
import { AccountComponent } from './myAccount/account.component';
import { FormsModule } from '@angular/forms';
import { EditAccountService } from './myAccount/edit-account.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CarouselComponent,
    BottomNavBarComponent,
    LayoutMainComponent,
    NewlyAddedCardsComponent,
    ShudderTVComponent,
    HomeComponent,
    SeriesComponent,
    MoviesComponent,
    MyAccountComponent,
    MyListComponent,
    CollectionsComponent,
    CollectionType1Component,
    CollectionType2Component,
    SubHeaderNavBarComponent,
    MovieCardsComponent,
    MajorCardsComponent,
    MinorCardsComponent,
    ListComponent,
    UserInfoComponent,
    EditAccount,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
