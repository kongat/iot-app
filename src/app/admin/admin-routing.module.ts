import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';

const routes: Routes = [
    {path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', component: ManageUsersComponent},
      { path: 'manage-users', component: ManageUsersComponent},
      { path: 'manage-devices', component: ManageDevicesComponent },
      { path: 'manage-rooms', component: ManageRoomsComponent }

    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
