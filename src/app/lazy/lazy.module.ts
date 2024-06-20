import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { ClientComponent } from '../client/client.component';
import { CommonModule } from '@angular/common';
import { BooksPricesComponent } from '../books-prices/books-prices.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { CapitalizeFirstLetterPipe } from '../capitalizefirstletter.pipe';
import { PriceColorDirective } from '../price-color.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [ClientComponent,BooksPricesComponent,CapitalizeFirstLetterPipe,PriceColorDirective],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ]),ReactiveFormsModule,FormsModule,
   // AppRoutingModule,
    LazyRoutingModule,CommonModule
  ],
 // providers: [CapitalizeFirstLetterPipe,PriceColorDirective],
})
export class LazyModule {}