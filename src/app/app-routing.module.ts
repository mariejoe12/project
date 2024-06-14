import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { BooksPricesComponent } from './books-prices/books-prices.component';


const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'books', component: BooksPricesComponent }]
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
