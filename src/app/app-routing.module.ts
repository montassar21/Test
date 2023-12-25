import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './modules/employes/employes.component';
import { EmployesModule } from './modules/employes/employes.module';

const routes: Routes = [
    {path :'' , component : EmployesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
