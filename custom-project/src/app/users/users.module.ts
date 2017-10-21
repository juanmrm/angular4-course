import { UsersRoutingModule } from './users-routing,module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ UsersComponent ],
  imports:  [ CommonModule, UsersRoutingModule ]
})
export class UsersModule {}