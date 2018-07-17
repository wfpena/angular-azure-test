import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component'
import {ModalTestComponent} from './modal-test/modal-test.component'
import { AppNavbarComponent } from './app-navbar/app-navbar.component'


const routes: Routes = [
	//{path: '', component: DepartmentListComponent},
	{path: '', redirectTo: '/departments', pathMatch: 'full'},
	{path: 'departments', component: DepartmentListComponent},
	{path: 'app-navbar', component: AppNavbarComponent},
	{path: 'employees', component: EmployeeListComponent},
	{path: 'departments/:id', component: DepartmentDetailComponent},
	{path: 'modal-test', component: ModalTestComponent},
	{path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, 
								EmployeeListComponent, 
								NotFoundComponent,
								DepartmentDetailComponent];