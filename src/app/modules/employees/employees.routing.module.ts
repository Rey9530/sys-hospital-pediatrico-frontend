import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
  },
  {
    path: "create",
    component: NewEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule { }
