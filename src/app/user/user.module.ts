import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserHeroComponent } from './user-hero/user-hero.component';
import { UserRoomComponent } from './user-room/user-room.component';
import { UserFooterComponent } from './user-footer/user-footer.component';

@NgModule({
  declarations: [UserInterfaceComponent, UserMenuComponent, UserHeroComponent, UserRoomComponent, UserFooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
