import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './modules/employes/employes.component';
import { EmployesModule } from './modules/employes/employes.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { EmployesService } from './modules/employes.service';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './modules/filterpipe.pipe';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,

  ],
  providers: [EmployesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
