// lazy-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { BooksPricesComponent } from '../books-prices/books-prices.component';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'client', component: ClientComponent },
  { path: 'books/:name', component: BooksPricesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
