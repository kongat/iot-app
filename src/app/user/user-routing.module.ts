import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface.component';


const routes: Routes = [
    {path: 'user-interface', component: UserInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
