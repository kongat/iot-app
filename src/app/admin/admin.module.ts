import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [AdminMenuComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    ManageRoomsComponent,
    ManageDevicesComponent,
    UserDetailComponent,
    DeviceDetailComponent,
    RoomDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    TableModule,
    ListboxModule
  ]
})
export class AdminModule { }
