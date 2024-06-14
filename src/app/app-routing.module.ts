 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModule } from './lazy/lazy.module';
import { ClientComponent } from './client/client.component';
import { BooksPricesComponent } from './books-prices/books-prices.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'booksprices', component: BooksPricesComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  