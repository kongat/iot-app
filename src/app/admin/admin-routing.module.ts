import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
    {path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', component: ManageUsersComponent},
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-users/:id', component: UserDetailComponent},
      { path: 'manage-devices', component: ManageDevicesComponent },
      {path: 'manage-devices/:id', component: DeviceDetailComponent},
      { path: 'manage-rooms', component: ManageRoomsComponent },
      {path: 'manage-rooms/:id', component: RoomDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
