import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';

@NgModule({
  declarations: [AdminMenuComponent, AdminDashboardComponent, ManageUsersComponent, ManageRoomsComponent, ManageDevicesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
