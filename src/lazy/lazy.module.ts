import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { ClientComponent } from '../app/client/client.component';
import { CommonModule } from '@angular/common';
import { BooksPricesComponent } from '../app/books-prices/books-prices.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ])
  ]
})
export class LazyModule {}