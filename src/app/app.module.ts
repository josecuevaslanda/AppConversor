import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { medidasComponent } from './medidas/medidas.component';
import { divisaComponent } from './divisa/divisa.component';
import { temperaturaComponent } from './temperatura/temperatura.component';

@NgModule({
  declarations: [
    AppComponent,
    medidasComponent,
    divisaComponent,
    temperaturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
