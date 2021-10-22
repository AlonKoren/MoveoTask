import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users' , component: UserComponent },
  { path: 'detail/:username', component: UserDetailComponent },
  { path: '**', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
