import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';


//module
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//service
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RepoComponent,
    UserComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
