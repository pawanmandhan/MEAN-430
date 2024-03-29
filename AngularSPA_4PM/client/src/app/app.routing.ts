import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './users/create.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
