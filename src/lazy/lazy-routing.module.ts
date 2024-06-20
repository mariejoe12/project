import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPricesComponent } from '../app/books-prices/books-prices.component';
import { LazyComponent } from './lazy.component';
import { ClientComponent } from '../app/client/client.component';

const routes: Routes = [
    { path: '', component: LazyComponent },
   
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }                                                                                               