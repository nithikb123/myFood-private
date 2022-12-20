import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { PublicModule } from '../public/public.module';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { AdminLayoutComponent } from './admin-layout.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    MenuComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicModule
  ]
})
export class AdminModule { }
