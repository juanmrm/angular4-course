import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const usersRoutes: Routes = [
  { path: '' , component: UsersComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(usersRoutes) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}