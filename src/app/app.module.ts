import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AddressComponent } from './address/address.component';
import { BusinessComponent } from './business/business.component';
import { ProgrammeComponent } from './programme/programme.component'

@NgModule({
  declarations: [AppComponent, AddressComponent, BusinessComponent, ProgrammeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const apiBaseUrl: string = 'https://localhost:5001/'
