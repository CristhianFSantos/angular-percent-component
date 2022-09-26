import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPorcentagemComponent } from './input-porcentagem.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InputPorcentagemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
