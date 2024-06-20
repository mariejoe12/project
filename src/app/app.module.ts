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
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, 
    ClientComponent, 
    CapitalizeFirstLetterPipe,
    BooksPricesComponent,
    PriceColorDirective
],

  imports: [BrowserModule,
    FormsModule, AppRoutingModule, RouterModule.forRoot([]),
     ReactiveFormsModule,HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}                       