import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import{ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from'@angular/forms';
import{LocalStorageService} from'./local-storage.service';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"Addbook",component:AddBookComponent
  },
  {
    path:"viewbook",component:ViewBookComponent
  },
  {
    path:"deletebook",component:DeleteBookComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddBookComponent,
    ViewBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    ChartModule,
    RouterModule.forRoot(routes),
    ToastModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [LocalStorageService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
