import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CapitalizeFirstLetterPipe } from './capitalizefirstletter.pipe';
import { BooksPricesComponent } from './books-prices/books-prices.component';
import { PriceColorDirective } from './price-color.directive';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, 
    ClientComponent, 
    CapitalizeFirstLetterPipe,
    BooksPricesComponent,
    PriceColorDirective
],

  imports: [BrowserModule,
    FormsModule, AppRoutingModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}                       