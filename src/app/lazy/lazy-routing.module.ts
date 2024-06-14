import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { BooksPricesComponent } from '../books-prices/books-prices.component';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
    { path: '', component: LazyComponent },
   
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }                                                                                               