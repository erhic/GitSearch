import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
  {path:'home',component:HomeComponent},
  {path:'repo',component:RepoComponent},
  {path:'user',component:UserComponent},
  { path:'**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
