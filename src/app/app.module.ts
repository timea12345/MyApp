import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { ListOfPersonsComponent } from './list-of-persons/list-of-persons.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from "@angular/common/http";
import { MyServiceService } from './my-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    ListOfPersonsComponent,
    DetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
