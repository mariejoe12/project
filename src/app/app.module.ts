import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CapitalizeFirstLetterPipe } from './capitalizefirstletter.pipe';

@NgModule({
  declarations: [AppComponent, ClientComponent, CapitalizeFirstLetterPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}